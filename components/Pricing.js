import React from 'react'
import { Box, Button, Flex, Text, HStack } from '@chakra-ui/react'

export const Pricing = () => {
  return (
    <Box
     height='360px'  
     bg='green' 
     mt='20px' 
     px='15px' 
     py="15px"
      
    >

      <Text
       as="H1"
       fontFamily='sans-serif' 
       fontSize='25px' 
       color='white' 
       fontWeight='semibold'
      > Pricing</Text>
        
      <HStack>
      <Box as="section"
           mr='20px'
           width="200px"
           height="300px"
           px="20px"
           py="20px"
      >
      <Button
         bg='gray.200' 
         color='blue.300'   
         width='150px'  
         fontSize='22px'
         >
        Basic 
      </Button>
      <p color='white'>NGN2500/Monthly</p> 
      </Box> 
      <Box as='section' mr='20px'  width="200px" height="300px" px="20px"
           py="20px">
      <Button
       bg='gray.200' 
       color='blue.300' 
       mb="10px"
       mr='20px' 
       width='150px'  
       fontSize='22px'>
        Ultimate  
      </Button>
       <p color='white'>NGN5000/Monthly</p>
    </Box>
    <Box as='section' mr='20px' width="200px" height="300px" px="20px"
           py="20px">  
      <Button
       bg='gray.200' 
       color='blue.300' 
       mb='10px' 
       mr='20px' 
       width='150px' 
       fontSize='22px'>
        Premium  
      </Button>
      </Box>
      </HStack>
      
    </Box>
  )
}
