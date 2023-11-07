import React from 'react'
import { Box, Flex, Spacer, HStack, Link, Text, Container, Center, SimpleGrid, Card, CardHeader, CardBody, CardFooter, Stack } from '@chakra-ui/react'
import { IconButton } from "@chakra-ui/react";
import {FaTwitter, FaFacebook, FaInstagram} from "react-icons/fa"
import { FaCopyright } from 'react-icons/fa';

export const Footer = () => {
  return (
    <Box
      p='15px'
      pt="40px"
      bg="gray.800"
      color="white"
    >
      <SimpleGrid pl="3rem"  spacing="35px" templateColumns='repeat(auto-fill, minmax(250px, 1fr))'> 
         <Card direction={{base: "column", sm: "row" }} color="white" bg="transparent">
            <CardHeader>
               {/* <Text>About</Text>
               <Link color="white"   href="/earn">Make money</Link > */}
            </CardHeader>
            <CardBody>
               <Text></Text>
            </CardBody>
         </Card>
         <Card bg="transparent" color="white">
            <CardHeader>
               {/* <Text>About</Text>
               <Link color="white"   href="/help">Help center</Link > */}
            </CardHeader>
            <CardBody>
               <Text></Text>
            </CardBody>
         </Card>
         <Card bg="transparent" color="white">
            <CardHeader>
               {/* <Text>About</Text> */}
            </CardHeader>
            <CardBody>
               <Text></Text>
            </CardBody>
         </Card>
         
      </SimpleGrid>
      <Box pl="3rem" align="right">
         <Card width="300px" mt="4rem" mb="1rem" bg="transparent">
            <CardBody>
               <Text pl="2.2rem" color="white" textAlign="left">Follow us on</Text>
            </CardBody>
            <CardFooter justifyContent="space-evenly">
            <IconButton
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
            /> 
            </CardFooter>
         </Card>
      </Box>
      <Center>
      <HStack>
         <FaCopyright/>
         <Text  fontFamily="roboto"> 2023 Shago Inc. All rights reserved</Text>
      </HStack>
      </Center>
   </Box>
  )
}
