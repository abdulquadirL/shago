//import Plans from './Plans';
import Layout from './Layout';
import { Box, Heading, Text, SimpleGrid, Center, Spacer, Table, Tbody, Thead, Tr, Th, Td } from "@chakra-ui/react";
import { Plans } from './Plans';

const PricingPage = () => {

  
  return (
       <Box >
         <Center p="2rem" bg="teal" >
           <Heading size="xl" py={10}>Compare Plans</Heading>
          </Center>
            
             <SimpleGrid
                minChildWidth='200px' 
                spacing="30px" 
                templateColumns='repeat(auto-fill, minmax(200px, 1fr))'
                bg="teal"
              >
                <Box pl="1.5rem">
                  <Heading   size="lg" fontFamily="inter" fontWeight="extrabold" letterSpacing={"-0.3px"} color="blue.300">
                    Shago
                  </Heading>
                </Box>

                <Box>
                  <Heading size="md">Free</Heading>
                  <Text color="gray.300">N0/Month</Text>
                </Box>
                <Box>
                  <Heading size="md">Basic</Heading>
                  <Text color="gray.300">N2500/Month</Text>
                </Box>
                <Box>
                  <Heading size="md">Ultimate</Heading>
                  <Text color="gray.300">N5000/Month</Text>
                </Box>
                <Box>
                  <Heading size="md">Premium</Heading>
                  <Text color="gray.300">Contact Us</Text>
                </Box>
              </SimpleGrid> 
              
              <Table bg="teal">
        <Thead>
          <Tr>
            <Th>H</Th>
          </Tr>
        </Thead>
        
        <Tbody>
        <Tr>
            <Th>Items</Th>
            <Th>100</Th>
            <Th>500</Th>
            <Th>3000</Th>
            <Th>Unlimited</Th>
         </Tr>
        </Tbody>
       </Table>
      
       </Box>
      
   
  );
};

export default PricingPage;
