
import { Box, Button, Stack, Flex, Heading, Text, HStack, Spacer, Card, CardBody, SimpleGrid, Link, CardHeader, CardFooter, Tooltip } from '@chakra-ui/react'
import { Progress } from '@chakra-ui/react'
import { QuestionIcon } from '@chakra-ui/icons'
//import { MotionBox } from '@chakra-ui/react';


export const Plans = () => {
  return (
    <Box
     id="plans"
     bg="teal.500"
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
          <CardHeader pb="4rem">
            <Heading size="md">Free</Heading>
            <Text>Best for Mini Shops</Text>
          </CardHeader>
          <CardBody >
            <Heading size="lg">N0</Heading><Text pb={8}>/month</Text>
            <Text>100 Items <Tooltip hasArrow label='allow you to register items and track the details of sales'><QuestionIcon/></Tooltip></Text>
            <Progress borderRadius={10} colorScheme='green' size='sm' value={30}/>
            <Text>2 User License <Tooltip hasArrow label='User Licenses allow you to manage inventory and track activities in your shop by bringing your staff or team into Shago'><QuestionIcon/></Tooltip></Text>
            <Progress borderRadius={10} colorScheme='green' size='sm' value={30}/>
            <Text>1 Shop <QuestionIcon/></Text>
            <Progress borderRadius={10} colorScheme='green' size='sm' value={30}/>
            <Text>1 Staff <QuestionIcon/></Text>
            <Progress borderRadius={10} colorScheme='green' size='sm' value={30}/>
          </CardBody>
          <CardFooter>
            <Button><Link href="https://play.google.com/store/apps/details?id=ng.pencode.ims">Get Started</Link></Button>
          </CardFooter>
        </Card>
        <Card align="center" size="lg">
          <CardHeader pb="4rem">
            <Heading size="md">Basic</Heading>
            <Text>Best for Small Businesses</Text>
          </CardHeader>
          <CardBody>
            <Heading size="lg">N2,500</Heading><Text pb={8}>/month</Text>
            <Text>1000 Items <Tooltip hasArrow label='allow you to register items and track the details of sales'><QuestionIcon/></Tooltip></Text>
            <Progress borderRadius={10} colorScheme='green' size='sm' value={50}/>
            <Text>5 User License <Tooltip hasArrow label='User Licenses allow you to manage inventory and track activities in your shop by bringing your staff or team into Shago'><QuestionIcon/></Tooltip></Text>
            <Progress borderRadius={10} colorScheme='green' size='sm' value={50}/>
            <Text>2 Shops <QuestionIcon/></Text>
            <Progress borderRadius={10} colorScheme='green' size='sm' value={50}/>
            <Text>4 Staff <QuestionIcon/></Text>
            <Progress borderRadius={10} colorScheme='green' size='sm' value={50}/>
          </CardBody>
          <CardFooter>
            <Button><Link href="https://play.google.com/store/apps/details?id=ng.pencode.ims">Get Started</Link></Button>
          </CardFooter>
        </Card>
        <Card align="center">
          <CardHeader pb="4rem">
            <Heading size="md">Ultimate</Heading>
            <Text>Right Choice for Supermarkets and Restaurants</Text>
          </CardHeader>
          <CardBody>
            <Heading size="lg">N5,000</Heading><Text pb={8}>/month</Text>
             <Text>5000 Items <Tooltip hasArrow label='allow you to register items and track the details of sales'><QuestionIcon/></Tooltip></Text>
            <Progress borderRadius={10} colorScheme='green' size='sm' value={70}/>
            <Text>13 User License <Tooltip hasArrow label='User Licenses allow you to manage inventory and track activities in your shop by bringing your staff or team into Shago'><QuestionIcon/></Tooltip></Text>
            <Progress borderRadius={10} colorScheme='green' size='sm' value={70}/>
            <Text>5 Shops <Tooltip hasArrow label='Shago allows you to manage other branches/outlets on a single'><QuestionIcon/></Tooltip></Text>
            <Progress borderRadius={10} colorScheme='green' size='sm' value={70}/>
            <Text>12 Staff <QuestionIcon/></Text>
            <Progress borderRadius={10} colorScheme='green' size='sm' value={70}/>
            
            <Text>Track Credit Sales <Tooltip hasArrow label="allow you to keep accurate record of your debts tansactions and items you sold out on credit and prevent avoidable conflicts"><QuestionIcon/></Tooltip></Text>
            <Progress borderRadius={10} colorScheme='green' size='sm' value={70}/>
          </CardBody>
          <CardFooter>
            <Button><Link href="https://play.google.com/store/apps/details?id=ng.pencode.ims">Get Started</Link></Button>
          </CardFooter>
        </Card>
        <Card align="center">
          <CardHeader pb="4rem">
            <Heading size="md">Premium</Heading>
            <Text>Best for Larger Businesses with multiple branches </Text>
          </CardHeader>
          <CardBody>
            <Heading size="md" pb={6}>Get a Quote</Heading>
            <Text>Unlimited Items <Tooltip hasArrow label='There is no limit to the number of items you can manage with this plan'><QuestionIcon/></Tooltip></Text> 
            <Progress borderRadius={10} colorScheme='green' size='sm' value={100}/>
            <Text>20 Shops <Tooltip hasArrow label='Shago allows you to manage other branches/outlets with a single subscription plan'><QuestionIcon/></Tooltip></Text>
            <Progress borderRadius={10} colorScheme='green' size='sm' value={100}/>
            <Text>50 Staff <QuestionIcon/></Text>
            <Progress borderRadius={10} colorScheme='green' size='sm' value={100}/> 
            
          </CardBody>
          <CardFooter>
            <Button><Link href="https://play.google.com/store/apps/details?id=ng.pencode.ims">Get Started</Link></Button>
          </CardFooter>
        </Card>
  
       </SimpleGrid>
       
    </Box>
  )
}
