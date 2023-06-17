import { Box, Flex, Button, VStack, Text } from '@chakra-ui/react'
import React from 'react'

export const Features = () => {
  return (
    <Box
    bg="blue.200" as='section'
    >
    <Box >
    
      <Flex flexWrap='wrap'>   
      <VStack mb='30px' >
      <Text color='black' fontSize='25px' mt='10px' mb='10px' fontWeight='bold'>Features</Text>
        <Button borderRadius='10px'  bg='blue.500'  mb='10px'>Store Layout</Button>
        <Button variant="ghost" mr={2} bg='brown'  mb='25px'>Stocks Management</Button>
        <Button bg='purple.500' mt='15px'>Sales & Invoicing</Button>
        <Button bg='orange' mt='25px'>Credit/Debit management</Button>
        <Button bg='black'  mb='25px'>More...</Button>
      </VStack>
      </Flex>
      </Box> 
    </Box>
  )
}
