import React from 'react'
import { Box, Flex, Spacer, HStack, VStack, Text, Container } from '@chakra-ui/react'
import { TwitterIcon } from "@chakra-ui/icons";

export const Footer = () => {
  return (
    <Box
     height="400px"
     p='15px 15px'
     pt="40px"
     bg="gray.600"
     color="blue.300">
    <Flex> 
    <Box
     bg=""
     height="200px"
     width= "33%"
     mr='5px'
    >
      <VStack>
       <Text > About Us</Text>
      </VStack>
    </Box>
    <Spacer/>
    <Box
     bg=""
     height="200px"
     mr='5px'
     width= "33%"
    >
      <VStack>
       <Text > About Us</Text>
      </VStack>
    </Box>
    <Spacer/>
    <Box
     bg=""
     height="200px"
     width= "33%"
    >
      <VStack>
       <Text > Contact</Text>
       <Container>
        Twitter
        Facebook
        In
       </Container>
      </VStack>
    </Box>  
    </Flex>
    </Box>
  )
}
