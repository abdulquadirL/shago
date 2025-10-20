"use client";
import React from "react";
import {
  Box,
  Flex,
  Heading,
  Text,
  VStack,
  Image,
} from "@chakra-ui/react";
import { motion } from "framer-motion";

// Animation wrapper
const MotionBox = motion(Box);

const features = [
  {
    title: "Seamless Sales Tracking",
    description:
      "Keep a close eye on your sales with real-time updates. Understand your customers' preferences, track your best-selling items, and maximize profits.",
  image: "/animations/inventory.gif",

  },
  {
    title: "Inventory Control Made Easy",
    description:
      "Manage your stock effortlessly. Stay in the know about stock levels, receive low stock alerts, and ensure nothing goes out of stock.",
    image: "/shago.png",
  },
  {
    title: "Valuable Insights at Your Fingertips",
    description:
      "Discover the value of your stock with just a tap. Make informed decisions on restocking, discounts, and promotions.",
    image: "/animations/insights.gif",
  },
  {
    title: "Invoice Generation & Sharing",
    description:
      "Create professional invoices in seconds and share them across platforms with ease.",
    image: "/animations/invoice.gif",
  },
  {
    title: "Stay on Top of Credit Sales",
    description:
      "Effortlessly monitor and track credit sales. Ensure that all your transactions are recorded accurately.",
    image: "/animations/credit.gif",
  },
  {
    title: "Real-Time Sales Reports",
    description:
      "Get a comprehensive view of your sales performance whenever you need it.",
    image: "/animations/reports.gif",
  },
];

const TestFeatures = () => {
  return (
    <Box
      id="features"
      px={{ base: 4, md: 16 }}
      py={{ base: 12, md: 20 }}
      bg="white"
      width="100%"
    >
      <Heading
        as="h2"
        size="xl"
        color="teal.800"
        textAlign="center"
        mb={16}
        fontFamily="Inter"
      >
        Powerful Features for Your Shop
      </Heading>

      <VStack spacing={20} align="stretch">
        {features.map((feature, idx) => (
          <Flex
            key={idx}
            direction={{ base: "column", md: idx % 2 === 0 ? "row" : "row-reverse" }}
            align="center"
            justify="space-between"
            gap={10}
          >
            {/* Left Side - Animation/Image */}
            <MotionBox
              flex="1"
              initial={{ opacity: 0, x: idx % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
            >
              <Image
                src={feature.image}
                alt={feature.title}
                borderRadius="2xl"
                shadow="lg"
                objectFit="contain"
              />
            </MotionBox>

            {/* Right Side - Text */}
            <MotionBox
              flex="1"
              initial={{ opacity: 0, x: idx % 2 === 0 ? 50 : -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
            >
              <Heading size="lg" color="gray.800" mb={4}>
                {feature.title}
              </Heading>
              <Text fontSize="lg" color="gray.600" lineHeight="tall">
                {feature.description}
              </Text>
            </MotionBox>
          </Flex>
        ))}
      </VStack>
    </Box>
  );
};

export default TestFeatures;
