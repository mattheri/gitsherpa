import { Auth, GoogleAuthProvider } from "firebase/auth";
import OAuth from "./oauth.provider";

class GoogleProvider extends OAuth {
  constructor(auth: Auth) {
    super(auth, new GoogleAuthProvider());
  }
}

export default GoogleProvider;
