import { HamburgerIcon } from "@chakra-ui/icons";
import {
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  HStack,
  IconButton,
  Stack,
  Text,
  Box,
  useDisclosure,
  useMediaQuery,
  Flex,
  Slide,
} from "@chakra-ui/react";
import Link from "next/link";
import React, { useRef } from "react";

const Header = () => {
  const [isLargerThan768] = useMediaQuery("(min-width: 768px)");
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef();

  const NavbarDrawer = () => (
    <Drawer isOpen={isOpen} placement="right" onClose={onClose} finalFocusRef={btnRef}>
      <DrawerOverlay />
      <DrawerContent backgroundColor="secondary">
        <DrawerCloseButton />
        <DrawerHeader borderBottomWidth="1px">
          <Text mr="auto" as="h3" fontWeight="bold">
            JK
          </Text>
        </DrawerHeader>
        <DrawerBody>
          <Stack spacing="24px">
            <Link href="/" passHref>
              <Button as="a" variant="ghost" fontSize="16px">
                Home
              </Button>
            </Link>
            <Link href="/projects" passHref>
              <Button as="a" variant="ghost" fontSize="16px">
                Projects
              </Button>
            </Link>
            <Link href="/blog" passHref>
              <Button as="a" variant="ghost" fontSize="16px">
                Blog
              </Button>
            </Link>
          </Stack>
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  );

  return (
    <HStack py="2" fontSize={["2xl", "4xl"]}>
      <Flex w="100%" as="nav" justifyContent="space-between" alignItems="center" flexDir="row">
        <Link href="/" passHref>
          <Text as="a" fontWeight="bold">
            JK
          </Text>
        </Link>
        {isLargerThan768 ? (
          <Flex justifyContent="center" alignItems="center">
            <Link href="/" passHref>
              <Button as="a" variant="ghost" fontSize={["16px", "18px"]} p={4} ml="3vw">
                Home
              </Button>
            </Link>
            <Link href="/projects" passHref>
              <Button as="a" variant="ghost" fontSize={["16px", "18px"]} p={4} ml="3vw">
                Projects
              </Button>
            </Link>
            <Link href="/blog" passHref>
              <Button as="a" variant="ghost" fontSize={["16px", "18px"]} p={4} ml="3vw">
                Blog
              </Button>
            </Link>
          </Flex>
        ) : (
          <IconButton
            aria-label="hamburger"
            size="lg"
            icon={<HamburgerIcon />}
            ref={btnRef}
            colorScheme="orange"
            onClick={onOpen}
          />
        )}
      </Flex>
      <NavbarDrawer />
    </HStack>
  );
};
export default Header;
