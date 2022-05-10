import { Box, Button, Flex, VStack } from "@chakra-ui/react";
import { FC } from "react";

interface Props {
  isConflict: boolean;
  onChangeStep: () => void;
  onResolveConflict: () => void;
  onStartConflict: () => void;
  resetAll: () => void;
}

const SherpaControls: FC<Props> = ({
  isConflict,
  onChangeStep,
  onResolveConflict,
  onStartConflict,
  resetAll,
}) => {
  return (
    <VStack gap="0.5rem" w="100%">
      <Flex gap="1rem" w="100%">
        <Button w="100%" onClick={onChangeStep}>
          Prochaine étape
        </Button>
        {isConflict ? (
          <Button w="100%" onClick={onResolveConflict}>
            Je n'ai plus de conflit
          </Button>
        ) : (
          <Button onClick={onStartConflict} w="100%" colorScheme="red">
            J'ai des conflits
          </Button>
        )}
      </Flex>
      <Box w="100%">
        <Button w="100%" onClick={resetAll}>
          Reset toutes les étapes
        </Button>
      </Box>
    </VStack>
  );
};

export default SherpaControls;
