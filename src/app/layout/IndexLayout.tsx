import { Box, Container, Grid } from "@chakra-ui/react";
import Info from "app/components/Info/Info";
import { FC, useEffect, useState } from "react";
import useSherpa from "app/hooks/UseSherpa";
import Step from "app/components/Step/Step";
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
    <Grid gridTemplateColumns="1fr 1fr 1fr">
      <Box gridColumn={1}></Box>
      <Box gridColumn={2}>
        <Container>
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
      <Box gridColumn={3}>
        <Info currentBranchStatus={newStep} />
      </Box>
    </Grid>
  );
};

export default IndexLayout;
