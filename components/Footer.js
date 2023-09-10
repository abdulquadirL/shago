import React from 'react'
import { Box, Flex, Spacer, HStack, VStack, Text, Container, Grid } from '@chakra-ui/react'
import { TwitterIcon } from "@chakra-ui/icons";

export const Footer = () => {
  return (
    <Box
     height="400px"
     p='15px 15px'
     pt="40px"
     bg="blue.800"
     color="white">
    <Grid dir='row' columnGap={3}> 
    <Box
    
     bg=""
     height="200px"
     width= "33%"
     mr='5px'
    >
      
       <Text > About Us</Text>
      
    </Box>
    
    <Box
     bg=""
     height="200px"
     mr='5px'
     width= "33%"
    >
     
       <Text > About Us</Text>
      
    </Box>
    </Grid>
    <Grid dir='row' columnGap={3}>
    <Box
     
     height="200px"
     width= "33%"
    >
      
       <Text > Contact</Text>
       
        Twitter
        Facebook
        In
        
    </Box>  
    </Grid>
    </Box>
  )
}
