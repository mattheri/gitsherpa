import { GoogleAuthProvider } from "firebase/auth";
export interface Auth {}

export class Config {
  apiKey = process.env.REACT_APP_API_KEY || "";
  authDomain = process.env.REACT_APP_AUTH_DOMAIN || "";
  projectId = process.env.REACT_APP_PROJECT_ID || "";
  messagingSenderId = process.env.REACT_APP_MESSAGING_SENDER_ID || "";
  appId = process.env.REACT_APP_APP_ID || "";
  storageBucket = process.env.REACT_APP_STORAGE_BUCKET || "";
  measurementId = process.env.REACT_APP_MEASUREMENT_ID || "";
}

export type Providers = GoogleAuthProvider;

export interface User {
  refreshToken: string;
  uid: string;
  email: string;
  photoURL: string | null;
}
