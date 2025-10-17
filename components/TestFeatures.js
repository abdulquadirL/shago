import React from 'react';
import {
  Text,
  Box,
  Heading,
  SimpleGrid,
  Card,
  CardHeader,
  CardFooter,
  CardBody,
  Stack,
} from '@chakra-ui/react';

const features = [
  {
    title: "Seamless Sales Tracking",
    description:
      "Keep a close eye on your sales with real-time updates. Understand your customers' preferences, track your best-selling items, and maximize profits.",
  },
  {
    title: "Inventory Control Made Easy",
    description:
      "Manage your stock effortlessly. Stay in the know about stock levels, receive low stock alerts, and keep your shelves filled with the fast moving items. Ensure nothing goes out of stock.",
  },
  {
    title: "Valuable Insights at Your Fingertips",
    description:
      "Discover the value of your stock with just a tap. Make informed decisions on restocking, discounts, and promotions. Maximize your inventory's potential.",
  },
  {
    title: "Invoice Generation & Sharing",
    description:
      "Create professional invoices in seconds and share them across platforms with ease. Impress your customers and maintain a transparent transaction process.",
  },
  {
    title: "Stay on Top of Credit Sales",
    description:
      "Effortlessly monitor and track credit sales. Ensure that all your transactions are recorded accurately.",
  },
  {
    title: "Real-Time Sales Reports",
    description:
      "Get a comprehensive view of your sales performance whenever you need it. Optimize your strategy, see what's working, and make data-driven decisions.",
  },
];

const TestFeatures = () => {
  return (
    <Box id="features" px={{ base: 2, md: 8 }} py={{ base: 8, md: 16 }} bg="transparent" width="100%">
      <Heading
        as="h2"
        size="lg"
        color="gray.800"
        fontFamily="Inter"
        mb={{ base: 6, md: 10 }}
        textAlign="center"
        fontWeight="bold"
      >
        Powerful Features for Your Shop
      </Heading>
      <SimpleGrid
        spacing={{ base: 4, md: 8 }}
        columns={{ base: 1, sm: 2, md: 3 }}
        minChildWidth="260px"
      >
        {features.map((feature, idx) => (
          <Card
            key={idx}
            direction="column"
            borderRadius={10}
            color="gray.800"
            bg="gray.200"
            boxShadow="md"
            minH="220px"
            _hover={{ bg: "teal.700", color: "teal.100", transform: "translateY(-4px)", transition: "0.2s" }}
          >
            <Stack height="100%">
              <CardHeader>
                <Heading size="md">{feature.title}</Heading>
              </CardHeader>
              <CardBody>
                <Text>{feature.description}</Text>
              </CardBody>
              <CardFooter />
            </Stack>
          </Card>
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default TestFeatures;