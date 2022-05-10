import {
  Box,
  Container,
  Flex,
  IconButton,
  useDisclosure,
} from "@chakra-ui/react";
import { ColorModeSwitcher } from "components/ColorModeSwitcher";
import { FC } from "react";

const Navbar: FC = () => {
  return (
    <Flex as="header" justifyContent="center" padding={2}>
      <Box flexGrow={1}>
        {/* <IconButton
          icon={<MdMenu />}
          aria-label="Open menu"
          ref={buttonRef}
          onClick={onOpen}
        />
        <Sidebar
          isOpen={isOpen}
          onClose={onClose}
          onOpen={onOpen}
          ref={buttonRef}
        /> */}
      </Box>
      <Container as="nav"></Container>
      <Flex flexGrow={1} justifyContent="flex-end">
        <ColorModeSwitcher />
      </Flex>
    </Flex>
  );
};

export default Navbar;
