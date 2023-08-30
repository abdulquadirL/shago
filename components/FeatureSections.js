import { useState } from 'react';
import { Box, Button, Text, Image, Center} from '@chakra-ui/react';


 const FeatureSections = ({ buttonText, sectionText, buttonColor  }) => 

  {
  const [isTextVisible, setIsTextVisible] = useState(false);
  const [isImageVisible, setIsImageVisible] = useState(false);  

  const handleButtonHover = () => {
    setIsTextVisible(!isTextVisible);
    setIsImageVisible(!isImageVisible)
  };
  return(
    
    <Box bg="" display="flex" flexDirection={["column", "row", "row"]} width="100%">
     
    <Box width="58%" 
         textAlign="left"
         color=""
         border="5px solid blue.300"
         p="10px 10px"
    >  
   <Center>
   <Button
     bg="gray.400"
     color={buttonColor}
     width="100%"
     size = {["sm", "sm", "lg"]}
     onMouseEnter={handleButtonHover}
     onMouseLeave={handleButtonHover}
     onClick={handleButtonHover}
     mb="10px"
   >
     {buttonText}
   </Button>
   </Center>
   {isTextVisible && <Text mt="10px" fontSize={["12px", "16px", "20px"]} fontFamily=" tiro bangla">{sectionText}</Text>}
   
 </Box>
 <Box width="41%">
 {isImageVisible && <Image width={["100px", "170px", "300px"]} height={["120px", "200px", "400px"]}  objectFit='cover' src="./shago.png" alt='Shago'
 />}
 </Box>
 </Box>
 
  )
}
export default FeatureSections;




