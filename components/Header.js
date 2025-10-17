import React from 'react';
import { Box, Heading, Text, Stack, Button, Image, Center } from '@chakra-ui/react';

export function Header() {
  return (
    <Box width="100%" bgImage="url('/shago.png')" color="black" minH="100vh" position="relative">
      <Box maxW="85vw" mx="auto" px={{ base: 2, md: 8 }} pt={{ base: 6, md: 10 }}>
        <Stack
          direction={{ base: 'column', md: 'row' }}
          spacing={{ base: 8, md: 4 }}
          align="center"
          justify="space-between"
        >
          {/* Text Section */}
          <Box width={{ base: '100%', md: '50%' }} as="section">
            <Stack direction="column" spacing={3}>
              <Heading
                color="blue.800"
                fontWeight="bold"
                fontFamily="Inter"
                size={{ base: 'md', md: 'xl', lg: '3xl' }}
                textAlign={{ base: 'center', md: 'left' }}
                pt={{ base: 4, md: 8 }}
                pl={{ base: 0, md: 4 }}
                maxW="100%"
              >
                Manage your shop the smart way
              </Heading>
              <Text
                width={{ base: '100%', md: '80%' }}
                fontWeight="medium"
                fontSize={{ base: 'sm', md: 'md', lg: '2xl' }}
                mt={{ base: 2, md: 4 }}
                mb={{ base: 4, md: 6 }}
                pl={{ base: 0, md: 4 }}
                color="gray.600"
                fontFamily="Inter"
                textAlign={{ base: 'center', md: 'left' }}
              >
                Seamlessly track your shop activities from one powerful software and unlock the full potential of your business.
              </Text>
            </Stack>
          </Box>
          {/* Image Section */}
          <Box width={{ base: '100%', md: '50%' }}>
            <Center>
              <Image
                width={{ base: '140px', md: '250px', lg: '400px' }}
                height={{ base: '120px', md: '200px', lg: '350px' }}
                objectFit="cover"
                src="./shago.png"
                alt="Shago"
              />
            </Center>
          </Box>
        </Stack>
      </Box>
      <Center>
        <Button
          bgGradient="linear(to-r, orange.400, yellow.500)"
          color="white"
          _hover={{ bgGradient: 'linear(to-l, orange.300, yellow.500)' }}
          variant="solid"
          borderRadius="20px"
          mt={{ base: 4, md: 6 }}
          mb={{ base: 8, md: 12 }}
          size={{ base: 'sm', md: 'md', lg: 'lg' }}
        >
          Get started
        </Button>
      </Center>
    </Box>
  );
}
