import React from 'react'
import { Text, Box, Heading, Image, SimpleGrid, Card, CardHeader, CardFooter,CardBody, Stack } from '@chakra-ui/react'

const TestFeatures = () => {
  return (
    <Box  p="3rem" bg="teal">
        
          <SimpleGrid spacing="15px" templateColumns='repeat(auto-fill, minmax(350px, 2fr))' >
            <Card direction={{ base: 'row', sm: 'column' }} color="white" bg="teal">
              {/* <Image width={[ "250px"]} height={[ "200px"]}  objectFit='cover' src="./shago.png" alt='Shago'/> */}
              <Stack>
                <CardHeader>
                  <Image src=""/>
                  <Heading size="md"> Unlimited Product Registration </Heading>
                  
                </CardHeader>
                <CardBody>
                  <Text>With a single Application license, you will be able to register all available products in your store irrespective of the quantity</Text>
                </CardBody>
              <CardFooter></CardFooter>
              </Stack>
            </Card>

             <Card direction={{ base: 'row', sm: 'column' }} color="white" bg="teal">
              <Stack>
                <CardHeader>
                  <Heading size="md">Invoice Sharing</Heading>
                  <Image />
                </CardHeader>
                <CardBody>
                  <Text>Your customers are tired of waiting unendlessly for their invoice! <br/> Share invoices via all file sharing applications supported by your device in with single click and/or over a mobile blutooth enabled printer that saves you the stress and precious time of manually writing invoices for customers</Text>
                </CardBody>
                <CardFooter></CardFooter>
              </Stack>
              {/* <Image width={[ "250px"]} height={[ "200px"]}  objectFit='cover' src="./shago.png" alt='Shago'/> */}
            </Card>

             <Card direction={{ base: 'row', sm: 'column' }} color="white" bg="teal">
             {/* <Image width={[ "250px"]} height={[ "200px"]}  objectFit='cover' src="./shago.png" alt='Shago'/> */}
             <Stack>
                <CardHeader>
                  <Heading size="md"> Comprehensive stock tracker</Heading>
                </CardHeader>
                <CardBody>
                  <Text>Shago allows you to have a detailed stock entries of your goods with the ability to generate an accurate unit cost with the expenditure taken into consideration thereby having a near perfect suggestion as to setting the selling price for the stocks for profitability</Text>
                </CardBody>
                <CardFooter></CardFooter>
              </Stack>
            </Card>

            <Card direction={{ base: 'column', sm: 'column' }} color="white" bg="teal">
            <Stack>
                <CardHeader>
                  <Heading size="md">Realtime Sales Report</Heading>
                </CardHeader>
                <CardBody>
                  <Text>With Shago, you will be able to view all your tansactions over a time detailing the profit or loss accrued on items sold out</Text>
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