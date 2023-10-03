import { Box, Flex, Spacer, Heading, useColorMode, Link } from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import React from 'react'
import { useEffect, useState } from "react";
//import Link from 'next/link'
import NextLink from "next/link";
//import NavButton from "./NavButton";

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const { colorMode, toggleColorMode } = useColorMode();
  const [ show, setShow ] = useState(false)
  const handleToggle = () => {
    setShow(!show);
  }
  
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      if (scrollPosition > 0)
       {
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
      bg={isScrolled ? "gray.500" : "transparent"}
      onClickl={toggleColorMode}
      color={colorMode === "light" ? "Dark" : "teal"}
      
    
    >
    <Flex align="center"
          mr={5}>
      <Heading as="h1" size="lg" fontFamily="inter" fontWeight="extrabold" letterSpacing={"-0.3px"} color="blue.300">
          Shago
      </Heading>
      </Flex>
      <Box  display={{ base: "block", md: "none" }} onClick={handleToggle}>
        {show ? <CloseIcon />  : <HamburgerIcon />}
      </Box>
      
      <Box
        display={{ sm: show ? "block" : "none", md: "flex" }}
        width={{ sm: "full", md: "auto" }}
        alignItems="center"
        flexGrow={1} 
        fontFamily="inter" fontWeight="semibold"
       
      >
        <Link variant="ghost" mr={2} >
           Home  
        </Link>
        <Link variant="ghost" mr={2} href="/about">
           About
        </Link >
        <Link variant="ghost" mr={2}>
          Contact
        </Link>
        <Link variant="ghost" mr={2} href='/pricing'>
          Pricing
        </Link>

      </Box>
      <Spacer />
      <Box textAlign="right">
        <Link as={NextLink} target="_blank" href='https://satisfying-drifter-fa6.notion.site/Shago-User-s-guide-4442ba7c507c4b99a0fb44f224604a8e?pvs=4'>
          Learn
        </Link>
        
      </Box>
    </Flex>
    
  );
};

export default Navbar