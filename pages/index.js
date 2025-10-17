
import { Header } from "@/components/Header"
import { Plans } from "@/components/Plans"
import TestFeatures from "@/components/TestFeatures"
import { Footer } from "@/components/Footer"
import HelpPage from "@/components/HelpPage"
import { Box } from "@chakra-ui/react"
import Navbar from "@/components/Navbar"


export default function Home() {

  return (
    <Box bgGradient="linear(to-r, #f0f4f8, #e0e7ee)" minH="100vh">
      {/* Navbar component */}
      <Navbar/>
      <Header />
      <Box maxW="85vw" mx="auto" px={4} py={8}>
        <TestFeatures />
        <Plans />
        <HelpPage />
        
      </Box>
      <Footer/>
    </Box>
    
    
  )
}


