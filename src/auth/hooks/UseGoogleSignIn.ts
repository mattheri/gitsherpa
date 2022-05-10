import AuthService from "auth/service/auth.service";

const authService = new AuthService();

const useGoogleSignIn = () => {
  return authService.GOOGLE.signIn.bind(authService.GOOGLE);
};

export default useGoogleSignIn;
