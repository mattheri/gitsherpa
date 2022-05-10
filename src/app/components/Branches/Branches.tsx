import { Code } from "@chakra-ui/react";
import { FC } from "react";
import { BranchStatus } from "app/app";
import StartBranch from "../StartBranch/StartBranch";

interface Branch {
  name: string;
  currentStatus: string;
  nextStatus: BranchStatus;
}

const commands: Record<string, string> = {
  [BranchStatus.START]: "git checkout -b ",
  [BranchStatus.ADD]: "git add .",
  [BranchStatus.COMMIT]: "git commit -m 'commit message'",
  [BranchStatus.PUSH]: "git push origin ",
  [BranchStatus.MERGE_MAIN]: "git merge main",
  [BranchStatus.SYNC_MAIN]: "git pull origin main",
  [BranchStatus.CHECKOUT_MAIN]: "git checkout main",
  [BranchStatus.CHECKOUT_BRANCH]: "git checkout ",
};

interface Props {
  branches: Branch[];
}

const Branches: FC<Props> = ({ branches }) => {
  return (
    <>
      {branches.map((branch) => {
        if (branch.currentStatus === BranchStatus.START) return <StartBranch />;
        if (!(branch.currentStatus === BranchStatus.RESOLVE_CONFLICT)) {
          const command = commands[branch.currentStatus];

          return <Code>{command}</Code>;
        }

        return null;
      })}
    </>
  );
};

export default Branches;
