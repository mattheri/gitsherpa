import { Box, Code } from "@chakra-ui/react";
import { BranchStatus } from "app/app";
import useCurrentBranch from "app/hooks/UseCurrentBranch";
import { FC } from "react";
import StartBranch from "./StartBranch";

interface Props {
  currentStep: string;
  isConflict: boolean;
}

const Step: FC<Props> = ({ currentStep, isConflict }) => {
  const currentBranch = useCurrentBranch();

  const elements: Record<string, JSX.Element> = {
    [BranchStatus.START]: <StartBranch />,
    [BranchStatus.ADD]: <Code>git add .</Code>,
    [BranchStatus.COMMIT]: <Code>git commit -m 'commit message'</Code>,
    [BranchStatus.PUSH]: <Code>git push origin {currentBranch}</Code>,
    [BranchStatus.CHECKOUT_MAIN]: <Code>git checkout main</Code>,
    [BranchStatus.SYNC_MAIN]: <Code>git pull origin main</Code>,
  };

  const conflictElements: Record<string, JSX.Element> = {
    [BranchStatus.CHECKOUT_MAIN]: <Code>git checkout main</Code>,
    [BranchStatus.SYNC_MAIN]: <Code>git pull origin main</Code>,
    [BranchStatus.CHECKOUT_BRANCH]: <Code>git checkout {currentBranch}</Code>,
    [BranchStatus.MERGE_MAIN]: <Code>git merge main</Code>,
    [BranchStatus.RESOLVE_CONFLICT]: (
      <Code>resolve the conflicts in VS Code</Code>
    ),
    [BranchStatus.ADD]: <Code>git add .</Code>,
    [BranchStatus.COMMIT]: <Code>git commit -m 'commit message'</Code>,
    [BranchStatus.PUSH]: <Code>git push origin {currentBranch}</Code>,
  };

  const Element = isConflict
    ? conflictElements[currentStep]
    : elements[currentStep];

  return <Box pb="1rem">{Element}</Box>;
};

export default Step;
