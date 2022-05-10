import AuthService from "auth/service/auth.service";

const authService = new AuthService();

const useLocalSignUp = () => {
  return authService.LOCAL.createNewUser.bind(authService.LOCAL);
};

export default useLocalSignUp;
