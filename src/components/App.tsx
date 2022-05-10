import { ChakraProvider, theme } from "@chakra-ui/react";
import IndexLayout from "app/layout/IndexLayout";
import MainAppLayout from "app/layout/MainAppLayout";
import ProtectedAuthLayout from "auth/layout/ProtectedAuthLayout";
import SignInLayout from "auth/layout/SignInLayout";
import SignUpLayout from "auth/layout/SignUpLayout";
import AppLayout from "components/AppLayout";
import { Provider } from "react-redux";
import { Route, Routes } from "react-router-dom";
import routes from "router/routes";
import store from "store/store";

export const App = () => (
  <Provider store={store}>
    <ChakraProvider theme={theme}>
      <Routes>
        <Route element={<AppLayout />}>
          <Route element={<ProtectedAuthLayout />}>
            <Route element={<MainAppLayout />}>
              <Route path={routes.index} element={<IndexLayout />} />
            </Route>
          </Route>
          <Route path={routes.login} element={<SignInLayout />} />
          <Route path={routes.signup} element={<SignUpLayout />} />
        </Route>
      </Routes>
    </ChakraProvider>
  </Provider>
);
