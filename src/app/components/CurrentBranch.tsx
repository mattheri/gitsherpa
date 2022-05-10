import { Heading } from "@chakra-ui/react";
import { FC } from "react";
import useAppSelector from "store/hooks/UseAppSelector";
import selectors from "app/appSlice.selectors";

const CurrentBranch: FC = () => {
  const currentBranch = useAppSelector(selectors.currentBranch);
  return (
    <Heading textAlign="center" pb="0.5rem">
      {currentBranch}
    </Heading>
  );
};

export default CurrentBranch;
