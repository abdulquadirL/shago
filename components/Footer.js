import React from 'react'
import { Box, Flex, Spacer, HStack, VStack, Text, Container, Grid, SimpleGrid, Card, CardHeader, CardBody } from '@chakra-ui/react'
import { IconButton } from "@chakra-ui/react";
//import {FaTwitter, FaFacebook, FaInstagram} from "react-icons/fa"

export const Footer = () => {
  return (
    <Box
     height="400px"
     p='15px 15px'
     pt="40px"
     bg='teal'
     color="white">
    <SimpleGrid  spacing="35px" templateColumns='repeat(auto-fill, minmax(250px, 1fr))'> 
      <Card direction={{base: "column", sm: "row" }} color="white" bgGradient="linear(to-r, teal.500, blue.100)">
         <CardHeader>
            <Text>About</Text>
         </CardHeader>
         <CardBody>
            <Text></Text>
         </CardBody>
      </Card>
      <Card>
         <CardHeader>
            <Text>About</Text>
         </CardHeader>
         <CardBody>
            <Text></Text>
         </CardBody>
      </Card>
      <Card>
         <CardHeader>
            <Text>About</Text>
         </CardHeader>
         <CardBody>
            <Text></Text>
         </CardBody>
      </Card>
      {/* <IconButton
        as="a"
        href="https://twitter.com/yourtwitter"
        icon={<FaTwitter />}
        aria-label="Twitter"
      />
      <IconButton
        as="a"
        href="https://facebook.com/yourfacebook"
        icon={<FaFacebook />}
        aria-label="Facebook"
      />
      <IconButton
        as="a"
        href="https://instagram.com/yourinstagram"
        icon={<FaInstagram />}
        aria-label="Instagram"
      /> */}
    </SimpleGrid>
    
    </Box>
  )
}
