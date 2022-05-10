import GoogleProvider from "auth/providers/google.provider";
import LocalProvider from "auth/providers/local.provider";
import { getAuth } from "firebase/auth";
import App from "./app.service";
import { User } from "auth/auth";
import authPubSub, { AuthEvents } from "./auth.pubsub";

class AuthService {
  auth = getAuth(App);
  pubsub = authPubSub;

  get GOOGLE() {
    return new GoogleProvider(this.auth);
  }

  get LOCAL() {
    return new LocalProvider(this.auth);
  }

  onSignIn(callback: (user: User | null) => void) {
    this.pubsub.subscribe(AuthEvents.SIGN_IN, callback);
  }

  signOut() {
    this.auth.signOut();

    this.pubsub.publish(AuthEvents.SIGN_OUT);
  }

  currentUser() {
    return this.auth.currentUser;
  }
}

export default AuthService;
