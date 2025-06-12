import {
  Box,
  Button,
  Heading,
  Text,
  Card,
  CardBody,
  SimpleGrid,
  Link,
  CardHeader,
  CardFooter,
  Tooltip,
  Progress,
  Stack,
} from '@chakra-ui/react';
import { QuestionIcon } from '@chakra-ui/icons';

export const Plans = () => {
  return (
    <Box
      id="plans"
      bg="teal.500"
      width="100%"
      px={{ base: 2, md: 8 }}
      py={{ base: 6, md: 10 }}
    >
      <Text
        fontSize={{ base: 'lg', md: '2xl' }}
        width="100%"
        color="white"
        fontWeight="bold"
        mb={{ base: 4, md: 8 }}
        textAlign="center"
      >
        Pricing
      </Text>

      <SimpleGrid
        minChildWidth="250px"
        spacing={{ base: 4, md: 8 }}
        columns={{ base: 1, sm: 2, md: 4 }}
      >

        {/* Basic Plan */}
        <Card align="center" size="lg" bg="white" color="teal.700" borderRadius="lg" boxShadow="md">
          <CardHeader pb="2rem">
            <Heading size="md">Basic</Heading>
            <Text fontSize="sm">Best for Small Businesses</Text>
          </CardHeader>
          <CardBody>
            <Heading size="lg" color="teal.600">N2,500</Heading>
            <Text pb={4} fontSize="sm">/month</Text>
            <Stack spacing={2}>
              <Text>
                1000 Items{' '}
                <Tooltip hasArrow label="Allows you to register items and track the details of sales">
                  <QuestionIcon />
                </Tooltip>
              </Text>
              <Progress borderRadius={10} colorScheme="green" size="sm" value={50} />
              <Text>
                5 User License{' '}
                <Tooltip hasArrow label="User Licenses allow you to manage inventory and track activities in your shop by bringing your staff or team into Shago">
                  <QuestionIcon />
                </Tooltip>
              </Text>
              <Progress borderRadius={10} colorScheme="green" size="sm" value={50} />
              <Text>
                2 Shops <QuestionIcon />
              </Text>
              <Progress borderRadius={10} colorScheme="green" size="sm" value={50} />
              <Text>
                4 Staff <QuestionIcon />
              </Text>
              <Progress borderRadius={10} colorScheme="green" size="sm" value={50} />
            </Stack>
          </CardBody>
          <CardFooter>
            <Button
              as={Link}
              href="https://play.google.com/store/apps/details?id=ng.pencode.ims"
              colorScheme="teal"
              width="100%"
              borderRadius="full"
            >
              Get Started
            </Button>
          </CardFooter>
        </Card>

        {/* Ultimate Plan */}
        <Card align="center" size="lg" bg="white" color="teal.700" borderRadius="lg" boxShadow="md">
          <CardHeader pb="2rem">
            <Heading size="md">Ultimate</Heading>
            <Text fontSize="sm">Right Choice for Supermarkets and Restaurants</Text>
          </CardHeader>
          <CardBody>
            <Heading size="lg" color="teal.600">N5,000</Heading>
            <Text pb={4} fontSize="sm">/month</Text>
            <Stack spacing={2}>
              <Text>
                5000 Items{' '}
                <Tooltip hasArrow label="Allows you to register items and track the details of sales">
                  <QuestionIcon />
                </Tooltip>
              </Text>
              <Progress borderRadius={10} colorScheme="green" size="sm" value={70} />
              <Text>
                13 User License{' '}
                <Tooltip hasArrow label="User Licenses allow you to manage inventory and track activities in your shop by bringing your staff or team into Shago">
                  <QuestionIcon />
                </Tooltip>
              </Text>
              <Progress borderRadius={10} colorScheme="green" size="sm" value={70} />
              <Text>
                5 Shops{' '}
                <Tooltip hasArrow label="Shago allows you to manage other branches/outlets on a single">
                  <QuestionIcon />
                </Tooltip>
              </Text>
              <Progress borderRadius={10} colorScheme="green" size="sm" value={70} />
              <Text>
                12 Staff <QuestionIcon />
              </Text>
              <Progress borderRadius={10} colorScheme="green" size="sm" value={70} />
              <Text>
                Track Credit Sales{' '}
                <Tooltip hasArrow label="Allows you to keep accurate record of your debts transactions and items you sold out on credit and prevent avoidable conflicts">
                  <QuestionIcon />
                </Tooltip>
              </Text>
              <Progress borderRadius={10} colorScheme="green" size="sm" value={70} />
            </Stack>
          </CardBody>
          <CardFooter>
            <Button
              as={Link}
              href="https://play.google.com/store/apps/details?id=ng.pencode.ims"
              colorScheme="teal"
              width="100%"
              borderRadius="full"
            >
              Get Started
            </Button>
          </CardFooter>
        </Card>

        {/* Premium Plan */}
        <Card align="center" size="lg" bg="white" color="teal.700" borderRadius="lg" boxShadow="md">
          <CardHeader pb="2rem">
            <Heading size="md">Premium</Heading>
            <Text fontSize="sm">Best for Larger Businesses with multiple branches</Text>
          </CardHeader>
          <CardBody>
            <Heading size="md" color="teal.600" pb={6}>
              Get a Quote
            </Heading>
            <Stack spacing={2}>
              <Text>
                Unlimited Items{' '}
                <Tooltip hasArrow label="There is no limit to the number of items you can manage with this plan">
                  <QuestionIcon />
                </Tooltip>
              </Text>
              <Progress borderRadius={10} colorScheme="green" size="sm" value={100} />
              <Text>
                20 Shops{' '}
                <Tooltip hasArrow label="Shago allows you to manage other branches/outlets with a single subscription plan">
                  <QuestionIcon />
                </Tooltip>
              </Text>
              <Progress borderRadius={10} colorScheme="green" size="sm" value={100} />
              <Text>
                50 Staff <QuestionIcon />
              </Text>
              <Progress borderRadius={10} colorScheme="green" size="sm" value={100} />
            </Stack>
          </CardBody>
          <CardFooter>
            <Button
              as={Link}
              href="https://play.google.com/store/apps/details?id=ng.pencode.ims"
              colorScheme="teal"
              width="100%"
              borderRadius="full"
            >
              Get Started
            </Button>
          </CardFooter>
        </Card>
      </SimpleGrid>
    </Box>
  );
};
