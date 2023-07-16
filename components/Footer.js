import React from 'react'
import { Box, Flex, Spacer, Stack } from '@chakra-ui/react'

export const Footer = () => {
  return (
    <Box
     height="400px"
     width="100%"
     mt="40px"
     bg="blue.800">
    <Flex>
        <Stack direction="row">
    <Box
     bg="gray.100"
     height="200px"
     width="300px" 
    >
    </Box>
    <Spacer/>
    <Box
     bg="gray.100"
     height="200px"
     width="300px" 
    >
    </Box>
    <Spacer/>
    <Box
     bg="gray.100"
     height="200px"
     width="300px" 
    >
    </Box>
    <Box
     bg="gray.100"
     height="200px"
     width="300px" 
    >
    </Box>
        </Stack>
    </Flex>
    </Box>
  )
}
