
import { Header } from "./Header";
import { Plans } from "./Plans";
import TestFeatures from "./TestFeatures";
import { Footer } from "./Footer";
//import { Box, Heading, Text } from "@chakra-ui/react";
import Layout from "./Layout";
import { Box } from "@chakra-ui/react";
import Navbar from "./Navbar";

const HomePage = () => {
  return (
    <Layout>
         <Box>
            <Header/>
            <TestFeatures/>
            <Plans/>
            <Footer/>
        </Box>
    </Layout>
   
    
  );
};

export default HomePage;
