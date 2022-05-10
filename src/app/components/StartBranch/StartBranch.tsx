import { Box, Button, Code, Flex, VStack } from "@chakra-ui/react";
import Form from "components/Form/Form";
import { FC } from "react";
import useAppDispatch from "store/hooks/UseAppDispatch";
import { setCurrentBranch } from "app/appSlice";

const initialValues = {
  branchName: "",
};

const StartBranch: FC = () => {
  const dispatch = useAppDispatch();

  const onSubmit = (values: typeof initialValues) => {
    dispatch(setCurrentBranch(values.branchName));
  };

  return (
    <Form initialValues={initialValues} onSubmit={onSubmit}>
      <VStack gap="0.5rem">
        <Flex alignItems="center" gap="1rem">
          <Code minW="fit-content">git checkout -b </Code>
          <Box>
            <Form.Input name="branchName" placeholder="Nom de la branche" />
          </Box>
        </Flex>
        <Button type="submit">Ajouter la branche</Button>
      </VStack>
    </Form>
  );
};

export default StartBranch;
