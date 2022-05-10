import { Container, Divider, Grid, VStack } from "@chakra-ui/react";
import EmailSignUpForm from "auth/components/EmailSignUpForm";
import GoogleSignInForm from "auth/components/GoogleSignInForm";
import GoToSignin from "auth/components/GoToSignin";
import useAddUserOnAuth from "auth/hooks/UseAddUserOnAuth";
import { FC } from "react";

const SignUpLayout: FC = () => {
  useAddUserOnAuth();

  return (
    <Grid w="100%" h="100%" flexGrow={1} placeItems="center">
      <Container>
        <VStack>
          <EmailSignUpForm />
          <Divider />
          <GoogleSignInForm />
          <GoToSignin />
        </VStack>
      </Container>
    </Grid>
  );
};

export default SignUpLayout;
