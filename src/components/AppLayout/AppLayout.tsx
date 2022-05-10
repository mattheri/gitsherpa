import { Flex } from "@chakra-ui/react";
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
