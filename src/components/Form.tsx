import Input from "components/Inputs/Input";
import Select from "components/Inputs/Select";
import { Form as FormikForm, Formik, FormikHelpers } from "formik";
import * as Yup from "yup";
import { Box } from "@chakra-ui/react";

type ValidationSchema<T extends any> = {
  [P in keyof T]:
    | Yup.StringSchema
    | Yup.NumberSchema
    | Yup.BooleanSchema
    | Yup.DateSchema;
};

interface Props<T extends object> {
  initialValues: T;
  onSubmit: (values: T, helpers?: FormikHelpers<T>) => void;
  validationSchema?: ValidationSchema<T>;
  children?: React.ReactNode;
}

const Form = <T extends object>({
  initialValues,
  onSubmit,
  validationSchema,
  children,
}: Props<T>) => {
  return (
    <Formik
      validationSchema={
        validationSchema && Yup.object().shape(validationSchema)
      }
      validateOnBlur={!!validationSchema}
      validateOnChange={!!validationSchema}
      initialValues={initialValues}
      onSubmit={onSubmit}
    >
      <Box as={FormikForm} w="100%">
        {children}
      </Box>
    </Formik>
  );
};

export default Object.assign(Form, {
  Input: Input,
  Select: Select,
});
