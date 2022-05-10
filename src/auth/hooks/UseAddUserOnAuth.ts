import AuthService from "auth/service/auth.service";
import { User } from "auth/auth";
import useAppDispatch from "store/hooks/UseAppDispatch";
import { addUser } from "auth/authSlice";
import { useNavigate } from "react-router-dom";
import routes from "router/routes";
import useAppSelector from "store/hooks/UseAppSelector";
import selectors from "auth/auth.selectors";
import { useEffect } from "react";

const authService = new AuthService();

const useAddUserOnAuth = () => {
  const dispatch = useAppDispatch();
  const user = useAppSelector(selectors.getCurrentUser);
  const navigate = useNavigate();
  const redirectUrl = useAppSelector(selectors.getRedirectionURL);

  const onSignin = (user: User | null) => {
    if (!user) return;

    const userData: User = {
      uid: user.uid,
      email: user.email,
      refreshToken: user.refreshToken,
      photoURL: user.photoURL,
    };

    dispatch(addUser(userData));
  };

  useEffect(() => {
    if (!user) return;

    navigate(redirectUrl || routes.index);
  }, [user]);

  authService.onSignIn(onSignin);
};

export default useAddUserOnAuth;
