import AuthService from "auth/service/auth.service";

const authService = new AuthService();

const useLocalSignIn = () => {
  return authService.LOCAL.signIn.bind(authService.LOCAL);
};

export default useLocalSignIn;
