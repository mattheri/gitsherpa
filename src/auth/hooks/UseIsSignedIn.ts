import { useState, useEffect } from "react";
import useAppSelector from "store/hooks/UseAppSelector";
import selectors from "auth/auth.selectors";
import { addRedirectTo } from "auth/authSlice";
import useAppDispatch from "store/hooks/UseAppDispatch";
import { useNavigate } from "react-router-dom";
import routes from "router/routes";

const useIsSignedIn = () => {
  const [url, setUrl] = useState(window.location.pathname);

  const user = useAppSelector(selectors.getCurrentUser);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    setUrl(window.location.pathname);
  }, [window.location.pathname]);

  useEffect(() => {
    if (!user) {
      navigate(routes.login);
    }

    return () => {
      if (
        !user &&
        (window.location.pathname !== routes.login ||
          window.location.pathname !== routes.signup)
      )
        dispatch(addRedirectTo({ redirectTo: url }));
    };
  }, [user]);
};

export default useIsSignedIn;
