import { Box, Collapse, Text } from "@chakra-ui/react";
import { BranchStatus } from "app/app";
import { FC, useEffect, useRef, useState } from "react";
import MarkDown from "react-markdown";
import newBranch from "./md/newBranch.md";
import add from "./md/add.md";
import commit from "./md/commit.md";
import push from "./md/push.md";
import resolveConflicts from "./md/resolveConflicts.md";
import mergeMain from "./md/mergeMain.md";
import checkoutBranch from "./md/checkoutBranch.md";
import checkoutMain from "./md/checkoutMain.md";
import syncMain from "./md/syncMain.md";

interface Props {
  currentBranchStatus: string;
}

const paths: Record<string, string> = {
  [BranchStatus.START]: newBranch,
  [BranchStatus.ADD]: add,
  [BranchStatus.COMMIT]: commit,
  [BranchStatus.PUSH]: push,
  [BranchStatus.CHECKOUT_MAIN]: checkoutMain,
  [BranchStatus.SYNC_MAIN]: syncMain,
  [BranchStatus.CHECKOUT_BRANCH]: checkoutBranch,
  [BranchStatus.MERGE_MAIN]: mergeMain,
  [BranchStatus.RESOLVE_CONFLICT]: resolveConflicts,
};

const Info: FC<Props> = ({ currentBranchStatus }) => {
  const [NewSnippet, setNewSnippet] = useState<JSX.Element | null>(null);
  const timeout = useRef<number>();

  const loadMd = async (path?: string) => {
    const md = await fetch(path || paths[currentBranchStatus]);
    const text = await md.text();

    setNewSnippet(<MarkDown>{text}</MarkDown>);
  };

  const switchSnippets = async () => {
    if (timeout.current) {
      clearInterval(timeout.current);
    }

    setNewSnippet(null);

    timeout.current = window.setTimeout(() => {
      loadMd();

      clearInterval(timeout.current!);
    }, 500);
  };

  useEffect(() => {
    loadMd(newBranch);
  }, []);

  useEffect(() => {
    switchSnippets();

    return () => {
      if (timeout.current) clearInterval(timeout.current);
    };
  }, [currentBranchStatus]);

  return (
    <Box>
      <Collapse in={!!NewSnippet}>
        <Box
          backgroundColor="blackAlpha.300"
          paddingBlock={4}
          paddingInline={4}
          borderRadius={4}
        >
          {NewSnippet}
        </Box>
      </Collapse>
    </Box>
  );
};

export default Info;
