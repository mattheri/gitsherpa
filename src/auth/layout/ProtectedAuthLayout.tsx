import useIsSignedIn from "auth/hooks/UseIsSignedIn";
import { FC } from "react";
import { Outlet } from "react-router-dom";

const ProtectedAuthLayout: FC = () => {
  useIsSignedIn();

  return <Outlet />;
};

export default ProtectedAuthLayout;
