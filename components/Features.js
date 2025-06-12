import React, { useState } from 'react';
import { Button, Box, Text, Stack, useBreakpointValue } from "@chakra-ui/react";

const features = [
  { id: "1", btext: "Create", title: "Hello! Create", intro: "creation", color: "green" },
  { id: "2", btext: "Edit", title: "Hello! Edit", intro: "editing", color: "gold" },
  { id: "3", btext: "Delete", title: "Hello Delete", intro: "deleting", color: "tomato" }
];

const Features = () => {
  const [activeFeature, setActiveFeature] = useState(null);

  // Responsive direction: column on mobile, row on desktop
  const direction = useBreakpointValue({ base: "column", md: "row" });

  return (
    <Box m={4} p={4}>
      <Stack direction={direction} spacing={6} align="center">
        <Stack direction="row" spacing={4}>
          {features.map((feature) => (
            <Button
              key={feature.id}
              bg={feature.color}
              color="white"
              _hover={{ opacity: 0.8 }}
              onClick={() => setActiveFeature(feature)}
              onMouseEnter={() => setActiveFeature(feature)}
              onMouseLeave={() => setActiveFeature(null)}
              size={useBreakpointValue({ base: "sm", md: "md" })}
            >
              {feature.btext}
            </Button>
          ))}
        </Stack>
        <Box minW="180px" minH="40px" textAlign="center">
          {activeFeature && (
            <Text fontWeight="bold" fontSize={useBreakpointValue({ base: "md", md: "lg" })}>
              {activeFeature.title}
            </Text>
          )}
        </Box>
      </Stack>
    </Box>
  );
};

export default Features;