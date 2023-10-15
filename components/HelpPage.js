import { Box, Heading, Center, Text, Stack } from "@chakra-ui/react";
import Layout from "./Layout";

export default function HelpPage(){
    return (
        <Layout>
            <Box>
                <Center>
                    <Stack>
                        <Heading>Help Center</Heading>
                        <Text size="lg"> What can we help you with today</Text>
                    </Stack>
                </Center>
                
            </Box>
        </Layout>
    )
}