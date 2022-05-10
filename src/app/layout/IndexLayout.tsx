import { Box, Container, Flex, Grid } from "@chakra-ui/react";
import Info from "app/components/Info/Info";
import { FC, useEffect, useState } from "react";
import useSherpa from "app/hooks/UseSherpa";
import Step from "app/components/Step";
import { BranchStatus } from "app/app";
import useSherpaReset from "app/hooks/UseSherpaReset";
import CurrentBranch from "app/components/CurrentBranch";
import SherpaControls from "app/components/SherpaControls";
import useStepsLists from "app/hooks/UseStepsLists";

const IndexLayout: FC = () => {
  const [isConflict, setIsConflitc] = useState(false);
  const [previousStep, setPreviousStep] = useState<string>(BranchStatus.START);
  const step = useSherpa(isConflict);
  const resetAllSherpa = useSherpaReset();
  const { conflictsSteps } = useStepsLists();

  const [newStep, setNewStep] = useState<string>(
    () => step() || BranchStatus.START
  );

  useEffect(() => {
    console.log("newStep", newStep);
  }, [newStep]);

  const changeStep = () => setNewStep(step() || BranchStatus.START);

  const iHaveConflict = () => {
    setPreviousStep(newStep);
    setIsConflitc(true);
    setNewStep(BranchStatus.CHECKOUT_MAIN);
  };

  const iDontHaveConflict = () => {
    setNewStep(previousStep);
    setIsConflitc(false);
  };

  const resetAll = () => {
    resetAllSherpa();
    setNewStep(step() || BranchStatus.START);
  };

  useEffect(() => {
    resetAll();
  }, []);

  return (
    <Flex wrap="wrap">
      <Box w="100%" flexGrow={1}>
        <Container paddingInlineStart={[0, 0, 2]} paddingInlineEnd={[0, 0, 2]}>
          <CurrentBranch />
          <Step
            currentStep={newStep || BranchStatus.START}
            isConflict={isConflict}
          />
          <SherpaControls
            isConflict={isConflict}
            onChangeStep={changeStep}
            onStartConflict={iHaveConflict}
            onResolveConflict={iDontHaveConflict}
            resetAll={resetAll}
          />
        </Container>
      </Box>
      <Box flexGrow={1} pt={4}>
        <Info currentBranchStatus={newStep} />
      </Box>
    </Flex>
  );
};

export default IndexLayout;
