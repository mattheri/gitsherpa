import { Button, VStack } from "@chakra-ui/react";
import useLocalSignUp from "auth/hooks/UseLocalSignUp";
import Form from "components/Form";
import { FormikHelpers } from "formik";
import { FC } from "react";
import * as Yup from "yup";

const initialValues = {
  email: "",
  password: "",
  passwordConfirmation: "",
};

type InitialValues = typeof initialValues;

const EmailSignUpForm: FC = () => {
  const signup = useLocalSignUp();

  const onSubmit = async (
    { email, password }: InitialValues,
    helpers?: FormikHelpers<InitialValues>
  ) => {
    const errors = await helpers?.validateForm();
    const hasErrors = Object.entries(errors || {}).some(
      ([key, error]) => !!error
    );

    if (hasErrors) return;

    await signup(email, password);
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
        passwordConfirmation: Yup.string()
          .oneOf(
            [Yup.ref("password")],
            "Les mots de passes doivent être identiques"
          )
          .required("Confirmation requise"),
      }}
    >
      <VStack gap="0.5rem">
        <Form.Input name="email" placeholder="Courriel" />
        <Form.Input name="password" placeholder="Mot de passe" />
        <Form.Input name="passwordConfirmation" placeholder="Confirmation" />
        <Button w="100%" type="submit">
          Connexion
        </Button>
      </VStack>
    </Form>
  );
};

export default EmailSignUpForm;
