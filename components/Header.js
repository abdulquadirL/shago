
import React from 'react'
import { Box, Heading, Text, Stack, Button, Image, Center} from '@chakra-ui/react'

export function Header() {
  return (
    <Box width="100%" bgGradient="radial(teal.400, teal.300, gray.500)"  >
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
            color="white"
            maxWidth="100%"
            fontWeight='bold' 
            size={["sm", "xl", "3xl"]} 
            fontStyle='Inter' 
            textAlign="left"
            pt="30px"
            pl="10px"
            >
              Manage your shop the smart way
            </Heading> 
            <Text
            width="100%" 
            fontWeight='medium' 
            fontSize={["12px", "14px", "2xl"]} 
            mt='15px'
            mb="20px"
            pl="10px" 
            color="blue.50"
            textAlign="left"
            >
              Seamlessly track your shop activities from the one powerful software and unlock the full potential of your business 
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
              bgGradient="linear(to-r, orange, green.500)"
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
