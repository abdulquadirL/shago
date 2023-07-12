import { Box, Flex, HStack, Button, Text } from '@chakra-ui/react'
import React from 'react'
//import Image  from 'next/image'
import { useState } from 'react';

export const Features = () => {
  const [isTextVisible, setIsTextVisible] = useState(false);
    const handleButtonHover = () => {
      setIsTextVisible(!isTextVisible);
    };
  return (
    <Box
    bg="blue.300"
    >

    <Box
     as='section'
     ml="20px"
    >
      <Text as="H1" color='black' fontSize='25px' mt='10px' mb='10px' fontWeight='bold'>Features</Text>
      <Flex
       flexWrap='wrap'
      >   
      <HStack mb='30px' >
        <Box width="200px" height="200px" pl="5px" pr="5px">
          <Button borderRadius='10px'  bg='blue.500'  mr='20px' onMouseEnter={handleButtonHover} onMouseLeave={handleButtonHover}>Multiple Shop Access</Button >
          {isTextVisible && <Text color="white">Manage all your shops in one platform</Text>}
        </Box>
        <Box width="200px" height="200px" pl="5px" pr="5px">
          <Button  variant="ghost" bg='brown'  mr='20px' onMouseEnter={handleButtonHover} onMouseLeave={handleButtonHover}>Stocks Management</Button >
          {isTextVisible && <Text color="white">Manage all your shops in one platform</Text>}
        </Box>
        <Box width="200px" height="200px"  alignContent="center" pl="5px" pr="5px">
          <Button mr="20px" bg='violet' onMouseEnter={handleButtonHover} onMouseLeave={handleButtonHover}>Invoice </Button>
          {isTextVisible && <Text color="white">Manage all your shops in one platform</Text>}
        </Box>
        <Box width="200px" height="200px" pl="5px" pr="5px">
          <Button mr="20px" bg='gold' onMouseEnter={handleButtonHover} onMouseLeave={handleButtonHover}>Sales Report</Button>
          {isTextVisible && <Text color="white">Manage all your shops in one platform</Text>}
        </Box>
        <Box width="200px" height="200px" pl="5px" pr="5px">
          <Button bg='orange' mr='20px'onMouseEnter={handleButtonHover} onMouseLeave={handleButtonHover}>Credit/Debt management</Button>
          {isTextVisible && <Text color="white">Manage all your shops in one platform</Text>}
        </Box>
        
      </HStack>
      </Flex>
      </Box> 
    </Box>
    
  )
}
