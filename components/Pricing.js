import React from 'react'
import { Box, Button, Flex, Text, HStack, Spacer, Link } from '@chakra-ui/react'
import FixedButton from "../components/FixedButton";

export const Pricing = () => {
  return (
    <Box
     
     width="100%"
     height=''  
     mt='20px'
     px="15px"  
     py="5px" 
    >
      
      <Text
       
       fontSize='20px' 
       width="100%" 
       color='white' 
       fontWeight='bold'
       mb="10px"
      > Pricing
      </Text>

       <Flex direction={["column", "row", "row"]}>
      <Box as="section"
           bg="blue.100"
           width="33%"
           maxHeight="400px"
           px="10px "
           py="20px"
           textAlign="center"
      >
        <Text fontFamily="serif" color='white' fontWeight="bold" fontSize={["16px", "22px", "30px"]}>Basic</Text>
        <Text fontFamily="serif" fontSize={["14px", "20px", "28px"]} fontWeight="bold">NGN2500</Text><p>/Month</p>
        <Text fontFamily="inherit" color='white' fontWeight="semibold" fontSize={["12px", "18px", "22px"]}>1 Shop <br/> 3 Staffs <br/> Invoicing</Text>
      <Button
          bgGradient="linear(to-r, teal.500, blue.100)"
          _hover={{bgGradient: 'linear(to-l, orange.300, yellow.500)'}}
          width="100%"   
          mb='15px' 
          size={["sm", "sm", "lg"]} 
         >
        <Link href="https://play.google.com/store/apps/details?id=ng.pencode.ims">Get Started</Link>
      </Button>

      </Box> 
      <Spacer/>
      <Box as="section"
           bg="blue.300"
           width="33%"
           maxHeight="400px"
           px="10px "
           py="20px"
           alignItems="center"
           textAlign="center"
           >
           <Text color='white' fontFamily="serif" fontWeight="bold" fontSize={["16px", "22px", "30px"]}>Ultimate</Text>
           <Text fontFamily="serif" fontWeight="bold"  fontSize={["14px", "20px", "28px"]}>NGN5000</Text><p>/Month</p>
           <Text fontFamily="inherit"color='white' fontWeight="semibold" fontSize={["12px", "18px", "22px"]}>10 Shops <br/> 30 Staffs <br/> Invoicing <br/> Staff Management <br/></Text>
      <Button 
       bgGradient="linear(to-r, teal.500, blue.100)"
       _hover={{bgGradient: 'linear(to-l, orange.300, yellow.500)'}}
       width="100%"
       mt="20px" 
       mb="15px" 
       size={["sm", "sm", "lg"]}
       
       >
        Get Started  
      </Button>
     <FixedButton/>  
    </Box>
    <Spacer/>
    <Box as='section'
         bg="blue.600"  
         width="33%" 
         maxHeight="400px"
         px="10px "
         py="20px"
         textAlign="center"
         >  
         <Text fontFamily="serif" color='white' fontWeight="bold" fontSize={["16px", "22px", "30px"]}>Premium</Text>
         <Text fontFamily="calibri" fontWeight="bold" fontStyle=""  fontSize={["16px", "20px", "28px"]}>Contact Sales</Text>
      <Button
       bgGradient="linear(to-r, teal.500, blue.100)"
       _hover={{bgGradient: 'linear(to-l, orange.300, yellow.500)'}}
       width="100%"   
       position=""
       bottom={4}  
       size={["sm", "sm", "lg"]}

        
       >
        Get Started  
      </Button>
      </Box>
       </Flex>
       
    </Box>
  )
}
