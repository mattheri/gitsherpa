import { useState, useEffect } from "react";
import useAppSelector from "store/hooks/UseAppSelector";
import selectors from "auth/auth.selectors";
import { addRedirectTo } from "auth/authSlice";
import useAppDispatch from "store/hooks/UseAppDispatch";
import { useNavigate } from "react-router-dom";
import routes from "router/routes";

const useIsSignedIn = () => {
  const user = useAppSelector(selectors.getCurrentUser);
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) navigate(routes.login);
  }, [user]);
};

export default useIsSignedIn;
