import React from 'react';
import { useState } from 'react';
import { Button, Box, Text, Spacer } from "@chakra-ui/react"
//import { Button, Text } from 'react-scroll';

const Features = () => {

 const features = [
    {id: "1", btext1: "Create", title: "Hello! Create", intro: "creation"
    }, {id: "2", btext2: "Edit", title: "Hello! Edit", intro: "editing"}, {id: "3", btext3: "Delete", title: "Hello Delete", intro: "deleting"}
  ]

  const [isTextVisible, setIsTextVisible] = useState(false);
  const [isImageVisible, setIsImageVisible] = useState(false)
  const [boxVisible, setBoxVisible] = useState(false)
  const handleButtonHover = () => {
    setIsTextVisible(!isTextVisible)
    setBoxVisible(!boxVisible)
    setIsImageVisible(!isImageVisible)
  };
  
  return (
    <Box m={4} p={4} display="flex" flexDirection="row">
      <Box>
        <Button bg='green'
                key={features.id}
                onClick={handleButtonHover}
                onMouseEnter={handleButtonHover}
                onMouseLeave={handleButtonHover}
        >
        {features[0].btext1}
        </Button>
        <Button bg="gold" 
                key={features.id}
                onClick={handleButtonHover}
                onMouseEnter={handleButtonHover}
                onMouseLeave={handleButtonHover}
        >
        {features[1].btext2}
        </Button>
        <Button bg='tomato' 
                key={features.id}
                onClick={handleButtonHover}
                onMouseEnter={handleButtonHover}
                onMouseLeave={handleButtonHover}
        >
        {features[2].btext3}
        </Button>
      </Box>
      <Spacer/>
      <Box> 
        {isTextVisible && <Text key={features.id}>{features[1].title}</Text>}
      
       </Box>
      
        
    </Box>
    
    
  )
}

export default Features