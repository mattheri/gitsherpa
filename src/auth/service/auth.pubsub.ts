import PubSub from "utils/PubSub";

export enum AuthEvents {
  SIGN_IN = "SIGN_IN",
  SIGN_OUT = "SIGN_OUT",
  SIGN_UP = "SIGN_UP",
}

const authPubSub = new PubSub(AuthEvents);

export default authPubSub;
