import { Button, VStack } from "@chakra-ui/react";
import useLocalSignIn from "auth/hooks/UseLocalSignIn";
import Form from "components/Form/Form";
import { FC } from "react";
import * as Yup from "yup";

const initialValues = {
  email: "",
  password: "",
};

type InitialValues = typeof initialValues;

const EmailSignInForm: FC = () => {
  const signIn = useLocalSignIn();

  const onSubmit = ({ email, password }: InitialValues) => {
    signIn(email, password);
  };

  return (
    <Form
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={{
        email: Yup.string()
          .email("Courriel invalide")
          .required("Courriel requis"),
        password: Yup.string()
          .matches(
            /^(?=.*[a-z])(?=.*\d)[a-zA-Z\d\w\W]{8,}$/,
            "Le mot de passe requiert"
          )
          .required("Mot de passe requis"),
      }}
    >
      <VStack gap="0.5rem">
        <Form.Input name="email" placeholder="Courriel" />
        <Form.Input name="password" placeholder="Mot de passe" />
        <Button w="100%" type="submit">
          Connexion
        </Button>
      </VStack>
    </Form>
  );
};

export default EmailSignInForm;
