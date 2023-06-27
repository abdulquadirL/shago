
import React from 'react'
import { Box, Heading, Text, Stack, Button, Image, Spacer} from '@chakra-ui/react'
import { Features } from '../components/Features'
//import { Plans } from '../components/Plans'
//src='https://photos.app.goo.gl/UDRrLMaPEog44gn97'

export function Header() {
  return (
    <Box>
      <Box
      bgColor={'blue.600'}
      pl="30px"
      pt="30px"
      color="white"
      > 
      <Stack direction="row">
           <Stack direction="column">
            <Heading 
            maxWidth="750px" 
            fontWeight='bold' 
            fontSize={["xl", "2xl", "60px"]} 
            fontStyle='Inter' 
            textAlign="left"
            pt="40px"
            pl="20px"
            >
              Manage and grow your business the smart way
            </Heading> 
            <Text 
            fontWeight='medium' 
            fontSize={["2xl", "xl", "xl"]} 
            mt='10px'
            mb="30px"
            pl="20px" 
            maxWidth="750px" 
            textAlign="left">
              It is hightime you reduced avoidable losses and maximize your income without hassle.
            </Text> 
            </Stack>
            <Spacer />
             <Image
           boxSize={["200px", "320px", "800px"]}
           object-fit='cover'
           src="./shago.png"
           alt='Shago'
             />
      </Stack>
            <Stack direction ='column'>
              <Button 
              variant="solid"
              bg="blue.200" 
              mr="2px" 
              mt='20px' 
              mb="30px"
              size='lg'
              maxWidth="150px"
              > 
              Get started
              </Button>
            </Stack>     
        </Box>
        <Features /> 
        </Box>
  )
} 
