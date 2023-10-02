
import { Button } from "@chakra-ui/react";

const FixedButton = ({ onClick }) => {
  return (
    <Button
      position="fixed"
      bottom={4}
      right={4}
      colorScheme="blue"
      onClick={onClick}
    >
      Hello
    </Button>
  );
};

export default FixedButton;
