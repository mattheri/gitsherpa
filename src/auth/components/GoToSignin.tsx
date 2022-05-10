import { Box, Link as ChakraLink } from "@chakra-ui/react";
import { FC } from "react";
import { Link } from "react-router-dom";
import routes from "router/routes";

const GoToSignin: FC = () => {
  return (
    <Box>
      Already have an account?{" "}
      <ChakraLink fontWeight="bold" as={Link} to={routes.login}>
        Sign in
      </ChakraLink>
    </Box>
  );
};

export default GoToSignin;
