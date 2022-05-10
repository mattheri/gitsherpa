import { Flex } from "@chakra-ui/react";
import Navbar from "app/components/Navbar/Navbar";
import Main from "components/Main/Main";
import { FC } from "react";
import { Outlet } from "react-router-dom";

const MainAppLayout: FC = () => {
  return (
    <Flex flexDirection="column">
      <Navbar />
      <Main>
        <Outlet />
      </Main>
    </Flex>
  );
};

export default MainAppLayout;
