
import React from 'react'
import { Box, Heading, Text, Stack, Button} from '@chakra-ui/react'

//import { Features } from '../components/Features'
//import { Plans } from '../components/Plans'
//import { Image } from '@chakra-ui/react'
export function Header() {
  return (
    
    <Box  as='section'>
      
        <Box  
        bg='blue.300' 
        color='gray.50' 
        pt='90px' pb='100px' px='8' 
        textAlign={["left", "left", "center"]}
        >
            <Heading 
            maxWidth="600px" 
            fontWeight='bold' 
            fontSize={["2xl", "2xl", "70px"]} 
            fontStyle='Inter' 
            textAlign="left">
              Manage and grow your business the smart way
            </Heading> 
            <Text 
            fontWeight='medium' 
            fontSize={["2xl", "2xl", "1xl"]} 
            mt='20px'
            mb="30px" 
            maxWidth="600px" 
            textAlign="left">
              It is hightime you reduce avoidable losses and maximize your income without hassle.
            </Text>   
            <Stack direction ='column'>
              
              <Button 
              variant="solid"
              bg="blue.500" 
              mr="2px" 
              mt='20px' 
              size='lg'
              maxWidth="150px"
              > 
              Get started
              </Button>
            </Stack>
        </Box>  
    </Box>
  )
} 