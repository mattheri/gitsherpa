import { Box, Button, IconButton } from "@chakra-ui/react";
import useGoogleSignIn from "auth/hooks/UseGoogleSignIn";
import { FC } from "react";
import { FaGoogle } from "react-icons/fa";

const GoogleSignInForm: FC = () => {
  const signIn = useGoogleSignIn();

  return (
    <Box w="100%">
      <IconButton
        w="100%"
        colorScheme="red"
        icon={<FaGoogle />}
        onClick={signIn}
        aria-label="Sign in with Google"
      />
    </Box>
  );
};

export default GoogleSignInForm;
