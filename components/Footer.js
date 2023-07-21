import React from 'react'
import { Box, Flex, Spacer, HStack, VStack, Text } from '@chakra-ui/react'

export const Footer = () => {
  return (
    <Box
     height="400px"
     p='15px 15px'
     pt="40px"
     bg="blue.900">
    <Flex> 
    <Box
     bg=""
     height="200px"
     width= "33%"
     mr='5px'
    >
      <VStack>
       <Text> About Us</Text>
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
       <Text> About Us</Text>
      </VStack>
    </Box>
    <Spacer/>
    <Box
     bg=""
     height="200px"
     width= "33%"
    >
      <VStack>
       <Text> About Us</Text>
      </VStack>
    </Box>  
    </Flex>
    </Box>
  )
}
