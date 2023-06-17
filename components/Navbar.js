//import NextButton from 'next/link'
//import { Link } from '@chakra-ui/react'
import { Box, Flex, Spacer, Heading, Button } from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
//import { useScrollY } from "react-use-scroll-position";
import React from 'react'
import { useEffect, useState } from "react";
import { SearchBar } from "./SearchBar";
//import Link from "next/link";

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  //const { colorMode, toggleColorMode } = useColorMode();
  const { show, setShow } = React.useState(false)
  const handleToggle = () => setShow(!show);
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      if (scrollPosition > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <Flex
      as="nav"
      position={isScrolled ? "fixed" : "static"}
      top={0}
      left={0}
      right={0}
      alignItems="center"
      py={4}
      px={8}
      zIndex={10}
    justify='space-between'
    wrap='wrap'
    padding='1rem'
    bg={isScrolled ? "gray.800" : "transparent"}
    //color={colorMode === "light" ? "gray.900" : "gray.100"}
    >
    <Flex align="center"
          mr={5}>
      <Heading as="h1" size="lg" letterSpacing={"-.1rem"}>
          Shago
        </Heading>
      </Flex>
      <Box display={{ base: "block", md: "none" }} onClick={handleToggle}>
        {show ? <CloseIcon /> : <HamburgerIcon />}
      </Box>
      <Box
        display={{ sm: show ? "block" : "none", md: "flex" }}
        width={{ sm: "full", md: "auto" }}
        alignItems="center"
        flexGrow={1}
      >
        
        <Button variant="solid" mr={2}>
           Home 
        </Button>
        <Button variant="solid" mr={2}>
          About
        </Button >
        <Button variant="solid" mr={2}>
          Contact
        </Button>
        <Button variant="solid" mr={2}>
          Pricing
        </Button>
        <Spacer />
       <SearchBar />
      </Box>
      <Spacer />
      <Box textAlign="right">
        <Button>Signup</Button>
      </Box>
    </Flex>
  );
};

export default Navbar