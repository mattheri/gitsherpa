import { Flex } from "@chakra-ui/react";
import { ColorModeSwitcher } from "components/ColorModeSwitcher/ColorModeSwitcher";
import Main from "components/Main/Main";
import { FC } from "react";
import { Outlet } from "react-router-dom";

const AppLayout: FC = () => {
  return (
    <Flex flexDirection="column" w="100%" minHeight="100vh">
      <Outlet />
    </Flex>
  );
};

export default AppLayout;
