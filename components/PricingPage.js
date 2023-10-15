//import Plans from './Plans';
import Layout from './Layout';
import { Box, Heading } from "@chakra-ui/react";
import { Plans } from './Plans';


const PricingPage = () => {
  return (
    <Layout>
      <Box p={4}>
       <Plans/>
      </Box>
    </Layout>
   
  );
};

export default PricingPage;
