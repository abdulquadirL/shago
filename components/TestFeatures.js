import React from 'react'
import { Text, Box, Heading, Image, SimpleGrid, Card, CardHeader, CardFooter,CardBody, Stack } from '@chakra-ui/react'

const TestFeatures = () => {
  return (
    <Box id="features"  p="3rem" bg="teal">
        
          <SimpleGrid spacing="15px" templateColumns='repeat(auto-fill, minmax(350px, 2fr))' >
            <Card direction={{ base: 'row', sm: 'column' }} borderRadius={10} color="white" bg="gray.800">
             
              <Stack>
                <CardHeader>
                  <Heading size="md"> Seamless Sales Tracking </Heading>
                  
                </CardHeader>
                <CardBody>
                  <Text>Keep a close eye on your sales with real-time updates. Understand your customers' preferences, track your best-selling items, and maximize profits.</Text>
                </CardBody>
              <CardFooter></CardFooter>
              </Stack>
            </Card>

             <Card direction={{ base: 'row', sm: 'column' }} borderRadius={10} color="white" bg="gray.800">
              <Stack>
                <CardHeader>
                  <Heading size="md">Inventory Control Made Easy</Heading>
                </CardHeader>
                <CardBody>
                  <Text>Manage your stock effortlessly. Stay in the know about stock levels, receive low stock alerts, and keep your shelves filled with the fast moving items. Ensure nothing goes out of stock.</Text>
                </CardBody>
                <CardFooter></CardFooter>
              </Stack>
            </Card>

             <Card direction={{ base: 'row', sm: 'column' }} borderRadius={10} color="white" bg="gray.800">
             <Stack>
                <CardHeader>
                  <Heading size="md">Valuable Insights at Your Fingertips</Heading>
                </CardHeader>
                <CardBody>
                  <Text>Discover the value of your stock with just a tap. Make informed decisions on restocking, discounts, and promotions. Maximize your inventory's potential.</Text>
                </CardBody>
                <CardFooter></CardFooter>
              </Stack>
            </Card>

            <Card direction={{ base: 'column', sm: 'column' }} borderRadius={10} color="white" bg="gray.800">
            <Stack>
                <CardHeader>
                  <Heading size="md"> Invoice Generation & Sharing</Heading>
                </CardHeader>
                <CardBody>
                  <Text>Create professional invoices in seconds and share them across platforms with ease. Impress your customers and maintain a transparent transaction process.</Text>
                </CardBody>
                <CardFooter></CardFooter>
              </Stack>
              
            </Card>
            <Card direction={{ base: 'column', sm: 'column' }} borderRadius={10} color="white" bg="gray.800">
            <Stack>
                <CardHeader>
                  <Heading size="md">Stay on Top of Credit Sales</Heading>
                </CardHeader>
                <CardBody>
                  <Text>Effortlessly monitor and track credit sales. Ensure that all your transactions are recorded accurately.</Text>
                </CardBody>
                <CardFooter></CardFooter>
              </Stack>
             
            </Card>
            <Card direction={{ base: 'column', sm: 'column' }} borderRadius={10} color="white" bg="gray.800">
            <Stack>
                <CardHeader>
                  <Heading size="md">Real-Time Sales Reports</Heading>
                </CardHeader>
                <CardBody>
                  <Text>Get a comprehensive view of your sales performance whenever you need it. Optimize your strategy, see what's working, and make data-driven decisions.</Text>
                </CardBody>
                <CardFooter></CardFooter>
              </Stack>
            </Card>
          </SimpleGrid>
          
      </Box> 
  )
}

export default TestFeatures