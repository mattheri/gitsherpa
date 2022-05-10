import { Box, Link as ChakraLink } from "@chakra-ui/react";
import { FC } from "react";
import { Link } from "react-router-dom";
import routes from "router/routes";

const GoToSignup: FC = () => {
  return (
    <Box>
      Don't have an account?{" "}
      <ChakraLink fontWeight="bold" as={Link} to={routes.signup}>
        Sign up
      </ChakraLink>
    </Box>
  );
};

export default GoToSignup;
