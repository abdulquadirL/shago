import { Box, Flex, HStack, Button, Text } from '@chakra-ui/react'
import React from 'react'
//import Image  from 'next/image'
import { useState } from 'react';

export const Features = () => {
  const [isTextVisible, setIsTextVisible] = useState(false);
  const handleButtonHover = () => {
    setIsTextVisible(!isTextVisible);
  };
  const [isTextVisiblew, setIsTextVisiblew] = useState(false);
  const handleButtonHoverw = () => {
    setIsTextVisiblew(!isTextVisiblew);
  };
  const [isTextVisiblex, setIsTextVisiblex] = useState(false);
  const handleButtonHoverx = () => {
    setIsTextVisiblex(!isTextVisiblex);
  };
  const [isTextVisibley, setIsTextVisibley] = useState(false);
  const handleButtonHovery = () => {
    setIsTextVisibley(!isTextVisibley);
  };
  const [isTextVisiblez, setIsTextVisiblez] = useState(false);
  const handleButtonHoverz = () => {
    setIsTextVisiblez(!isTextVisiblez);
  };
  return (
    <Box
     bg="blue.300"
     px='15px'
     py="15px"

    >
      <Text as="H1" color='black' fontSize='25px' mt='10px' mb='10px' fontzeight='bold'>Features</Text>
      <Flex
       flexWrap='wrap'
      >   
      <HStack mb='30px' >
        <Box width="250px" height="200px" pl="5px" pr="5px">
          <Button borderRadius='10px'  bg='blue.500'  mr='20px' onMouseEnter={handleButtonHoverw} onMouseLeave={handleButtonHoverw}>Multiple Shop Access</Button >
          {isTextVisiblew && <Text color="white">Manage all your shops in one platform</Text>}
        </Box>
        <Box width="250px" height="200px" pl="5px" pr="5px">
          <Button borderRadius='10px'  variant="ghost" bg='brown'  mr='20px' width="200px" onMouseEnter={handleButtonHover} onMouseLeave={handleButtonHover}>Stocks Management</Button >
          {isTextVisible && <Text color="white">Manage all your shops in one platform</Text>}
        </Box>
        <Box width="250px" height="200px"  alignContent="center" pl="5px" pr="5px">
          <Button borderRadius='10px' mr="20px" bg='violet' width="200px" onMouseEnter={handleButtonHoverx} onMouseLeave={handleButtonHoverx}>Invoice </Button>
          {isTextVisiblex && <Text color="white">Manage all your shops in one platform</Text>}
        </Box>
        <Box width="250px" height="200px" pl="5px" pr="5px">
          <Button borderRadius='10px' mr="20px" bg='gold' width="200px" onMouseEnter={handleButtonHovery} onMouseLeave={handleButtonHovery}>Sales Report</Button>
          {isTextVisibley && <Text color="white">Manage all your shops in one platform</Text>}
        </Box>
        <Box width="250px" height="200px" pl="5px" pr="5px">
          <Button borderRadius='10px' bg='orange' mr='20px' width="200px" onMouseEnter={handleButtonHoverz} onMouseLeave={handleButtonHoverz}>Credit/Debt management</Button>
          {isTextVisiblez && <Text color="white">Manage all your shops in one platform</Text>}
        </Box>
        
      </HStack>
      </Flex>
      </Box> 
    
  )
}
