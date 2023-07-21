import { Box, Flex, HStack, Button, Text, Spacer, Stack, VStack } from '@chakra-ui/react'
import React from 'react'
//import Image  from 'next/image'
import { useState } from 'react';

export const Features = () => {
  const [isTextVisible, setIsTextVisible] = useState(false);

  const handleButtonHover = () => {setIsTextVisible(!isTextVisible)};
  return (
    <Box
      width="100%"
      bg="white"
      px='3%'
      py="3%"
    >
      
        <VStack>
        <Box bg="blue.600" height="200px" color="blue" p="10px 10px" width="100%" textAlign="center"
        >
          <Button id='btn' bg="wheat" onMouseEnter={handleButtonHover} onMouseLeave={handleButtonHover}>Invoicing</Button>
          {isTextVisible && <Text>You can be able to make sales and generate invoice which you can decide to print or share with your customer</Text>}
        </Box>
        <Spacer />
        <Box bg="blue.600" height="200px" color="blue" p="10px 10px" width="100%" textAlign="center"
        >
          <Button id='btn-b' bg="wheat" onMouseEnter={handleButtonHover} onMouseLeave={handleButtonHover}>Invoicing</Button>
          {isTextVisible && <Text> This a demo box</Text>}
      </Box>
      <Spacer />
      <Box bg="blue.600" height="200px" color="blue" p="10px 10px" width="100%" textAlign="center"
      >
        <Button id='btn-c' bg="wheat" onMouseEnter={handleButtonHover} onMouseLeave={handleButtonHover}>Invoicing</Button>
        {isTextVisible && <Text>This a demo box</Text>}
      </Box>
      </VStack>
        
    </Box> 
    
  )
}
