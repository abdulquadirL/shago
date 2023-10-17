import React from 'react'
import { Text, Box, Heading, Image, SimpleGrid, Card, CardHeader, CardFooter,CardBody, Stack } from '@chakra-ui/react'

const TestFeatures = () => {
  return (
    <Box id="features"  p="3rem" bg="teal">
        
          <SimpleGrid spacing="15px" templateColumns='repeat(auto-fill, minmax(350px, 2fr))' >
            <Card direction={{ base: 'row', sm: 'column' }} color="white" bg="gray.800">
              {/* <Image width={[ "250px"]} height={[ "200px"]}  objectFit='cover' src="./shago.png" alt='Shago'/> */}
              <Stack>
                <CardHeader>
                  <Image src=""/>
                  <Heading size="md"> Unlimited Product Registration </Heading>
                  
                </CardHeader>
                <CardBody>
                  <Text>With a single Application license, you will be able to register all available products in your store irrespective of the quantity.</Text>
                </CardBody>
              <CardFooter></CardFooter>
              </Stack>
            </Card>

             <Card direction={{ base: 'row', sm: 'column' }} color="white" bg="gray.800">
              <Stack>
                <CardHeader>
                  <Heading size="md">Invoice Sharing</Heading>
                  <Image />
                </CardHeader>
                <CardBody>
                  <Text>Share invoices via all file sharing applications supported by your device with a single click and/or over a mobile bluetooth enabled printer that saves you the stress and precious time of manually writing invoices for customers.</Text>
                </CardBody>
                <CardFooter></CardFooter>
              </Stack>
              {/* <Image width={[ "250px"]} height={[ "200px"]}  objectFit='cover' src="./shago.png" alt='Shago'/> */}
            </Card>

             <Card direction={{ base: 'row', sm: 'column' }} color="white" bg="gray.800">
             {/* <Image width={[ "250px"]} height={[ "200px"]}  objectFit='cover' src="./shago.png" alt='Shago'/> */}
             <Stack>
                <CardHeader>
                  <Heading size="md"> Comprehensive stock tracker</Heading>
                </CardHeader>
                <CardBody>
                  <Text>Shago will notify you on low stock in real time in order to replenish the inventory.</Text>
                </CardBody>
                <CardFooter></CardFooter>
              </Stack>
            </Card>

            <Card direction={{ base: 'column', sm: 'column' }} color="white" bg="gray.800">
            <Stack>
                <CardHeader>
                  <Heading size="md">Realtime Sales Report</Heading>
                </CardHeader>
                <CardBody>
                  <Text>With Shago, you will be able to view all your tansactions over a time detailing the profit or loss accrued on items sold out.</Text>
                </CardBody>
                <CardFooter></CardFooter>
              </Stack>
              {/* <Image width={[ "250px"]} height={[ "200px"]}  objectFit='cover' src="./shago.png" alt='Shago'/> */}
            </Card>
            <Card direction={{ base: 'column', sm: 'column' }} color="white" bg="gray.800">
            <Stack>
                <CardHeader>
                  <Heading size="md">Multi-Users License</Heading>
                </CardHeader>
                <CardBody>
                  <Text>Shago allows you to work with your staff or team easily thereby enabling you to view their activities and vice-versa depending on the permission granted to individual team member or staff.</Text>
                </CardBody>
                <CardFooter></CardFooter>
              </Stack>
              {/* <Image width={[ "250px"]} height={[ "200px"]}  objectFit='cover' src="./shago.png" alt='Shago'/> */}
            </Card>
            <Card direction={{ base: 'column', sm: 'column' }} color="white" bg="gray.800">
            <Stack>
                <CardHeader>
                  <Heading size="md">Automatic Syncronization</Heading>
                </CardHeader>
                <CardBody>
                  <Text>With Shago syncing system, you and your staff or team will be able to view changes such as change in price, stock update and also report tracking in time.</Text>
                </CardBody>
                <CardFooter></CardFooter>
              </Stack>
              {/* <Image width={[ "250px"]} height={[ "200px"]}  objectFit='cover' src="./shago.png" alt='Shago'/> */}
            </Card>
          </SimpleGrid>
          
      </Box> 
    
  )
}

export default TestFeatures