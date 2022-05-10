import { User } from "./auth";

export interface AuthState {
  user: User | null;
  redirectTo: string | null;
}
