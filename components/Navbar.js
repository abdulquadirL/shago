import { Box, Flex, Spacer, Heading, Image, useColorMode, Link, IconButton } from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon, SunIcon, MoonIcon } from "@chakra-ui/icons";
import { useEffect, useState } from "react";

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const { colorMode, toggleColorMode } = useColorMode();
  const [show, setShow] = useState(false);

  const handleToggle = () => setShow(!show);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
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
      px={{ base: 4, md: 8 }}
      zIndex={10}
      wrap="wrap"
      bg={isScrolled ? "teal.600" : "gray.700"}
      color="white"
      width="100%"
      boxShadow={isScrolled ? "md" : "none"}
      transition="background 0.2s"
    >
      <Box display="flex"  width="85vw" mx="auto" alignItems="center">
      {/* Logo and Brand */}
      <Flex align="center" mr={5}>
        <Image
          height={["24px", "30px", "36px"]}
          width={["24px", "30px", "36px"]}
          objectFit="cover"
          src="./iconShago.png"
          alt="Shago Logo"
          mr={2}
        />
        <Heading
          as="h1"
          size="lg"
          fontFamily="inter"
          fontWeight="extrabold"
          letterSpacing="-0.3px"
          color="blue.300"
        >
          Shago
        </Heading>
      </Flex>
      <Spacer />

      {/* Hamburger menu for mobile */}
      <Box display={{ base: "block", md: "none" }}>
        <IconButton
          aria-label={show ? "Close menu" : "Open menu"}
          icon={show ? <CloseIcon /> : <HamburgerIcon />}
          variant="ghost"
          color="white"
          fontSize="xl"
          onClick={handleToggle}
        />
      </Box>

      {/* Navigation Links */}
      <Box
        pr={{ base: 0, md: 10 }}
        pt={{ base: 4, md: 0 }}
        textAlign={{ base: "center", md: "right" }}
        display={{ base: show ? "block" : "none", md: "flex" }}
        width={{ base: "100%", md: "auto" }}
        flexGrow={1}
        fontFamily="inter"
        fontWeight="semibold"
        justifyContent="flex-end"
        alignItems="center"
        bg={{ base: isScrolled ? "teal.700" : "gray.800", md: "transparent" }}
        position={{ base: "absolute", md: "static" }}
        top={{ base: "64px", md: "auto" }}
        left={0}
        right={0}
        zIndex={9}
      >
        <Link color="white" href="/" mx={2} display="block" py={2}>
          Home
        </Link>
        <Link color="white" href="#features" mx={2} display="block" py={2}>
          Features
        </Link>
        <Link color="white" href="#plans" mx={2} display="block" py={2}>
          Pricing
        </Link>
        
        {/* Theme toggle button */}
        <IconButton
          aria-label="Toggle color mode"
          icon={colorMode === "light" ? <MoonIcon /> : <SunIcon />}
          onClick={toggleColorMode}
          variant="ghost"
          color="white"
          ml={{ base: 0, md: 4 }}
          mt={{ base: 2, md: 0 }}
        />
      </Box>
      </Box>
    </Flex>
  );
}

export default Navbar;