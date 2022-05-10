import { Box, Flex } from "@chakra-ui/react";
import { FC } from "react";

const Main: FC = ({ children }) => {
  return (
    <Flex as="main" flexDirection="column" flexGrow={1} paddingInline={3}>
      {children}
    </Flex>
  );
};

export default Main;
