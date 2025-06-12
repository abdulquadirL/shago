import React from 'react';
import {
  Box,
  SimpleGrid,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  IconButton,
  Text,
  HStack,
  Center,
  Stack,
  Link,
} from '@chakra-ui/react';
import { FaTwitter, FaFacebook, FaInstagram, FaCopyright } from 'react-icons/fa';

export const Footer = () => {
  return (
    <Box
      p={{ base: 4, md: 8 }}
      pt={{ base: 8, md: 12 }}
      bg="gray.800"
      color="white"
      as="footer"
      w="100%"
    >
      <SimpleGrid
        spacing={6}
        columns={{ base: 1, sm: 2, md: 3 }}
        px={{ base: 0, md: 8 }}
        mb={8}
      >
        <Card bg="transparent" color="white" boxShadow="none">
          <CardHeader>
            <Text fontWeight="bold" fontSize="lg">About</Text>
          </CardHeader>
          <CardBody>
            <Text fontSize="sm">
              Shago is your trusted platform for easy, secure, and fast transactions.
            </Text>
          </CardBody>
        </Card>
        <Card bg="transparent" color="white" boxShadow="none">
          <CardHeader>
            <Text fontWeight="bold" fontSize="lg">Quick Links</Text>
          </CardHeader>
          <CardBody>
            <Stack spacing={2}>
              <Link color="white" href="/earn">Make Money</Link>
              <Link color="white" href="/help">Help Center</Link>
              <Link color="white" href="/about">About Us</Link>
            </Stack>
          </CardBody>
        </Card>
        <Card bg="transparent" color="white" boxShadow="none">
          <CardHeader>
            <Text fontWeight="bold" fontSize="lg">Contact</Text>
          </CardHeader>
          <CardBody>
            <Text fontSize="sm">Email: support@shago.com</Text>
            <Text fontSize="sm">Phone: +234 814 033 3474</Text>
          </CardBody>
        </Card>
      </SimpleGrid>
      <Box w="100%" mb={6}>
        <Card
          width={{ base: "100%", sm: "320px" }}
          mx="auto"
          bg="transparent"
          boxShadow="none"
        >
          <CardBody>
            <Text color="white" textAlign="center" mb={2}>
              Follow us on
            </Text>
          </CardBody>
          <CardFooter justifyContent="center">
            <HStack spacing={4}>
              <IconButton
                as="a"
                href="https://twitter.com/yourtwitter"
                icon={<FaTwitter />}
                aria-label="Twitter"
                variant="ghost"
                colorScheme="whiteAlpha"
                fontSize="xl"
              />
              <IconButton
                as="a"
                href="https://facebook.com/yourfacebook"
                icon={<FaFacebook />}
                aria-label="Facebook"
                variant="ghost"
                colorScheme="whiteAlpha"
                fontSize="xl"
              />
              <IconButton
                as="a"
                href="https://instagram.com/yourinstagram"
                icon={<FaInstagram />}
                aria-label="Instagram"
                variant="ghost"
                colorScheme="whiteAlpha"
                fontSize="xl"
              />
            </HStack>
          </CardFooter>
        </Card>
      </Box>
      <Center>
        <HStack spacing={2}>
          <FaCopyright />
          <Text fontFamily="roboto" fontSize="sm">
            {new Date().getFullYear()} Shago Inc. All rights reserved
          </Text>
        </HStack>
      </Center>
    </Box>
  );
};
