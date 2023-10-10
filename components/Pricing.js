import React from 'react'
import { Box, Button, Flex, Heading, Text, HStack, Spacer, Card, CardBody, SimpleGrid, Link, CardHeader, CardFooter } from '@chakra-ui/react'


export const Pricing = () => {
  return (
    <Box
     bg="teal.400"
     width="100%"
     height=''  
     px="25px"  
     py="25px" 
    >
      <Text
       fontSize='20px' 
       width="100%" 
       color='white' 
       fontWeight='bold'
       mb="10px"
      > Pricing
      </Text>

       <SimpleGrid minChildWidth='250px' spacing="35px" templateColumns='repeat(auto-fill, minmax(250px, 1fr))'>
        <Card align="center" size="lg">
          <CardHeader>
            <Heading size="md">Basic</Heading>
          </CardHeader>
          <CardBody>
            <Text >START FREE</Text>
          </CardBody>
          <CardFooter>
            <Button><Link href="https://play.google.com/store/apps/details?id=ng.pencode.ims">Get Started</Link></Button>
          </CardFooter>
        </Card>
        <Card align="center">
          <CardHeader>
            <Heading size="md">Ultimate</Heading>
          </CardHeader>
          <CardBody>
            <Text>NGN2,500 MONTHLY</Text>
          </CardBody>
          <CardFooter>
            <Button><Link href="https://play.google.com/store/apps/details?id=ng.pencode.ims">Get Started</Link></Button>
          </CardFooter>
        </Card>
        <Card align="center">
          <CardHeader>
            <Heading size="md">Premium</Heading>
          </CardHeader>
          <CardBody>
            <Text>CONTACT SALES</Text>
          </CardBody>
          <CardFooter>
            <Button><Link href="https://play.google.com/store/apps/details?id=ng.pencode.ims">Get Started</Link></Button>
          </CardFooter>
        </Card>
  
       </SimpleGrid>
       
    </Box>
  )
}
