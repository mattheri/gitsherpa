import { Providers, User } from "auth/auth";
import authPubSub, { AuthEvents } from "auth/service/auth.pubsub";
import {
  signInWithPopup,
  signInWithRedirect,
  getRedirectResult,
  Auth,
} from "firebase/auth";

class OAuth {
  private provider: Providers;
  private auth: Auth;
  private isBrowser = typeof window !== "undefined";
  private pubsub = authPubSub;

  constructor(auth: Auth, provider: Providers) {
    this.auth = auth;
    this.provider = provider;

    this.initializeRedirect();
  }

  private isMobile() {
    if (this.isBrowser) {
      const breakpoint = "991px";

      return window.matchMedia(`(max-width: ${breakpoint})`).matches;
    }

    return true;
  }

  private async initializeRedirect() {
    const result = await getRedirectResult(this.auth);

    if (!result || result.operationType !== "signIn") return;

    this.pubsub.publish(AuthEvents.SIGN_IN, result.user);
  }

  private async useRedirect() {
    await signInWithRedirect(this.auth, this.provider);
  }
  private async usePopUp() {
    const userCredential = await signInWithPopup(this.auth, this.provider);

    const userData: User = {
      email: userCredential.user.email || "",
      uid: userCredential.user.uid,
      refreshToken: userCredential.user.refreshToken,
      photoURL: userCredential.user.photoURL,
    };

    this.pubsub.publish(AuthEvents.SIGN_IN, userData);
  }

  public async signIn() {
    if (this.isMobile()) return this.useRedirect();
    return this.usePopUp();
  }
}

export default OAuth;
