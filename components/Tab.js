import { Box, Flex, HStack, Heading, Text, Spacer } from '@chakra-ui/react'
import React from 'react'

export const Tab = () => {
  return (
    <Box bg="blue.700"
         px="3%" 
         py="3%px"
         color="white"
         
    >
        <Flex>
            <HStack>
                <Box 
                 maxWidth="30%"
                 pl="10px"
                 pr="10px"
                >
                    <Heading
                     fontSize="18px"
                     textAlign="center"
                     >
                        Features
                     </Heading>
                    <Text>You can ever imagine the potentials of this App</Text>
                </Box>
           <Spacer />
                <Box
                maxWidth="30%"
                pl="10px"
                pr="10px"
                >
                    <Heading
                     fontSize="18px"
                     textAlign="center"
                     >
                       Pricing
                     </Heading>
                     <Text>You can ever imagine the potentials of this App</Text>
                </Box>
            <Spacer />
                <Box
                maxWidth="30%"
                pl="10px"
                pr="10px"
                 >
                    <Heading
                     fontSize="18px"
                     textAlign="center"
                     >
                        Learn
                     </Heading>
                     <Text>You can ever imagine the potentials of this App</Text>
                </Box>
            </HStack>
        </Flex>
    
    </Box>
  )
}
