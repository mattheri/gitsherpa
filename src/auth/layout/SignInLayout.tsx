import { Container, Divider, Grid, VStack } from "@chakra-ui/react";
import EmailSignInForm from "auth/components/EmailSignInForm/EmailSignInForm";
import GoogleSignInForm from "auth/components/GoogleSignInForm/GoogleSignInForm";
import GoToSignup from "auth/components/GoToSignup";
import useAddUserOnAuth from "auth/hooks/UseAddUserOnAuth";
import { FC } from "react";

const SignInLayout: FC = () => {
  useAddUserOnAuth();

  return (
    <Grid w="100%" h="100%" flexGrow={1} placeItems="center">
      <Container>
        <VStack>
          <EmailSignInForm />
          <Divider />
          <GoogleSignInForm />
          <GoToSignup />
        </VStack>
      </Container>
    </Grid>
  );
};

export default SignInLayout;
