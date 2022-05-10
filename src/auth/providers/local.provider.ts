import { User } from "auth/auth";
import authPubSub, { AuthEvents } from "auth/service/auth.pubsub";
import {
  Auth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";

class LocalProvider {
  auth: Auth;
  private pubsub = authPubSub;

  constructor(auth: Auth) {
    this.auth = auth;
  }
  async createNewUser(email: string, password: string) {
    try {
      const user = await createUserWithEmailAndPassword(
        this.auth,
        email,
        password
      );

      const userData: User = {
        email: user.user.email || email,
        uid: user.user.uid,
        refreshToken: user.user.refreshToken,
        photoURL: user.user.photoURL,
      };

      this.pubsub.publish(AuthEvents.SIGN_IN, userData);
    } catch (e) {
      const error = e as Error;
      console.log(error.message);
    }
  }

  async signIn(email: string, password: string) {
    try {
      const user = await signInWithEmailAndPassword(this.auth, email, password);

      const userData: User = {
        email: user.user.email || email,
        uid: user.user.uid,
        refreshToken: user.user.refreshToken,
        photoURL: user.user.photoURL,
      };

      this.pubsub.publish(AuthEvents.SIGN_IN, userData);
    } catch (e) {
      const error = e as Error;
      console.log(error.message);
    }
  }
}

export default LocalProvider;
