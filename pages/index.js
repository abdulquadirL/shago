
import { Header } from "@/components/Header"
import { Plans } from "@/components/Plans"
import TestFeatures from "@/components/TestFeatures"
import { Footer } from "@/components/Footer"
import HelpPage from "@/components/HelpPage"
import { Box } from "@chakra-ui/react"
import Navbar from "@/components/Navbar"


export default function Home() {

  return (
    <Box>
      <Navbar/>
      <Box>
        <Header />
        <TestFeatures />
        <Plans />
        <HelpPage />
        <Footer/>
      </Box>
    </Box>
    
    
  )
}


