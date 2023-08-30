import React from 'react'
import { Flex, Text, Box, Container, Heading, Image, VStack, Spacer, Stack } from '@chakra-ui/react'
//import { Container } from 'postcss'

const TestFeatures = () => {
  return (
    <Box >
        <Box bg="" p="15px" width="100%">
          <Stack direction="row">
          <Box width="60%" p="15px">  
          <Heading size="sm">
            Unlimited Product Registration
          </Heading>
          <Text>With a single Application license, you will be able to register all available products in your store irrespective of the quantity</Text>
          </Box>
          <Box width="40%" alignItems="center" p="15px">
          <Image width={[ "250px"]} height={[ "200px"]}  objectFit='cover' src="./shago.png" alt='Shago'/>
          </Box>
          </Stack>
          
          <Stack direction="row">
          <Box width="40%" alignItems="center" p="15px">
          <Image width={[ "250px"]} height={[ "200px"]}  objectFit='cover' src="./shago.png" alt='Shago'/>
          </Box>
          <Box width="60%" p="15px">  
          <Heading size="sm">
            Invoice Sharing 
          </Heading>
          <Text>Your customers are tired of waiting unendlessly for their invoice! <br/> Share invoices via all file sharing applications supported by your device in with single click and/or over a mobile blutooth enabled printer that saves you the stress and precious time of manually writing invoices for customers</Text>
          </Box>
          </Stack>

          <Stack direction="row">
          <Box width="60%" p="15px">  
          <Heading size="sm">
            Comprehensive stock tracker
          </Heading>
          <Text>Shago allows you to have a detailed stock entries of your goods with the ability to generate an accurate unit cost with the expenditure taken into consideration thereby having a near perfect suggestion as to setting the selling price for the stocks for profitability</Text>
          </Box>
          <Box width="40%" alignItems="center" p="15px">
          <Image width={[ "250px"]} height={[ "200px"]}  objectFit='cover' src="./shago.png" alt='Shago'/>
          </Box>
          </Stack>
        </Box>
      </Box> 
    
  )
}

export default TestFeatures