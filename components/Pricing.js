import React from 'react'
import { Box, Button, Flex, Text, HStack, Spacer } from '@chakra-ui/react'

export const Pricing = () => {
  return (
    <Box
     width="100%"
     height='360px'  
     bg='blue.600' 
     mt='20px' 
     px={["10px", "15px", '25px']} 
     py="15px"
      
    >
      
      <Text
       as="H1"
       fontFamily='sans-serif' 
       fontSize={["10px", "15px", '25px']}  
       color='white' 
       fontWeight='semibold'
       mb="20px"
      > Pricing</Text>
       <HStack>
      <Box as="section"
      bg="whiteAlpha.300"
           mr='20px'
           width= {["120px", "200px", "300px"]}
           height="300px"
           px='20px'
           py="20px"
           
      >
      <Button
          bg="orange.300"
          width="100%"   
          mb='10px'  
          fontSize={["xl", "xl", "22px"]} 
         >
        Basic 
      </Button>
      <Text color='white'>NGN2500/Monthly</Text> 
      </Box> 
      <Spacer/>
      <Box as="section"
           bg="whiteAlpha.300"
           mr={["10px", "15px", "20px"]}
           width={["120px", "200px", "300px"]}
           height="300px"
           px={["10px", "15px", "20px"]}
           py={["10px", "15px", "20px"]}
           alignItems="center">
           
      <Button 
       bg="orange.300"
       width="100%" 
       mb="10px"  
       fontSize={["xl", "xl", "22px"]}
       >
        Ultimate  
      </Button>
       <Text color='white'>NGN5000/Monthly</Text>
    </Box>
    <Spacer/>
    <Box as='section' bg="whiteAlpha.300" mr='20px' width={["120px", "200px", "300px"]} height="300px" px="20px"
           py="20px">  
      <Button
       bg="orange.300"
       width="100%"   
       mb='10px'  
       fontSize={["xl", "xl", "22px"]} 
       >
        Premium  
      </Button>
      </Box>
       </HStack> 
    </Box>
  )
}
