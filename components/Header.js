
import React from 'react'
import { Box, Heading, Text, Stack, Button, Image, Center} from '@chakra-ui/react'
import { circOut } from 'framer-motion'

export function Header() {
  return (
    <Box width="100%" bgGradient="radial(teal.300, blue.700, gray.300)"  >
      <Box
      pl="30px"
      pt="30px" 
      > 
      <Stack direction="row">
        <Box
        width="50%"
        as='section'
          
        >
           <Stack direction="column">
            <Heading 
            maxWidth="100%"
            fontWeight='bold' 
            fontSize={["xl", "2xl", "70px"]} 
            fontStyle='Inter' 
            textAlign="left"
            pt="30px"
            pl="10px"
            >
              Manage and grow your business the smart way
            </Heading> 
            <Text
            width="100%" 
            fontWeight='medium' 
            fontSize={["12px", "14px", "2xl"]} 
            mt='15px'
            mb="20px"
            pl="10px" 
            color="blue.50"
            textAlign="left">
              It is hightime you reduced avoidable losses and maximize your income without hassle.
            </Text> 
            </Stack>
            </Box>
           
            <Box width="50%"
            >
              <Center>
             <Image width={["100px", "250px", "400px"]} height={["120px", "200px", "700px"]}  objectFit='cover' src="./shago.png" alt='Shago'
             />
             </Center>
             </Box>
            
             
      </Stack>
             
        </Box>
        <Center>
              <Button 
              bgGradient="linear(to-r, teal.500, blue.100)"
              _hover={{bgGradient: 'linear(to-l, orange.300, yellow.500),'}}
              variant="solid"
              borderRadius="20px" 
              ml="10px"
              mr="2px" 
              mt='10px' 
              mb="30px"
              size={['sm', 'sm', 'lg']}
              
              > 
              Get started for free
              </Button>
            </Center>   
    
        </Box>
  )
} 
