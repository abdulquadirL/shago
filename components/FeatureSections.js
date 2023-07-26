import { useState } from 'react';
import { Box, Button, Text, Image, Center} from '@chakra-ui/react';

const FeatureSections = ({ buttonText, sectionText  }) => {
  const [isTextVisible, setIsTextVisible] = useState(false);

  const handleButtonHover = () => {
    setIsTextVisible(!isTextVisible);
  };

  
  return (
    <Box m={4} display="flex" flexDirection="row">
      <Box bg="blue.500" display="flex" flexDirection="row" width="99%">
      
      <Box  width="58%" 
            textAlign="left"
            color="white"
            p="10px 10px"
      >
      <Center>
      <Button
        
        size = {["sm", "sm", "lg"]}
        onMouseEnter={handleButtonHover}
        onMouseLeave={handleButtonHover}
        onClick={handleButtonHover}
      >
        {buttonText}
      </Button>
      </Center>
      {isTextVisible && <Text >{sectionText}</Text>}
      
    </Box>
    <Box width="41%">
    <Image width={["100px", "170px", "300px"]} height={["120px", "200px", "400px"]}  objectFit='cover' src="./shago.png" alt='Shago'
    />
    </Box>
    </Box>
    </Box>
  );
};

export default FeatureSections;







