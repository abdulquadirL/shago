import React from 'react'
import { Box, Button, Flex, Text, VStack } from '@chakra-ui/react'

export const Plans = () => {
  return (
    <Box width='360px' height='360px'  bg='' mt='50px' pt='45px' border='3px solid #055' >
      <Text fontFamily='sans-serif' fontSize='25px' color='white' fontWeight='semibold'>Pricing Plans</Text>
        
          <VStack>
    <Button   bg='gray.200' color='blue.300' mt='20px'  maxHeight='100px' width='150px'  fontSize='22px'>
        Basic 
    </Button>
    <p>NGN2500/Monthly</p>  
    <Button bg='gray.200' color='blue.300' mt='10px' mb='10px' maxHeight='100px' width='150px'  fontSize='22px'>
        Ultimate  
    </Button>
    <p>NGN5000/Monthly</p>  
    <Button bg='gray.200' color='blue.300' mt='10px' mb='10px' maxHeight='100px' width='150px' fontSize='22px'>
        Premium  
    </Button>
    </VStack>
      
    </Box>
  )
}
