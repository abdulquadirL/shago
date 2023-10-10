
import { ChakraProvider, CSSReset} from "@chakra-ui/react"; 
import {Header} from '../components/Header'
import { Pricing } from '@/components/Pricing'
import Navbar from '../components/Navbar'
import { Footer } from "@/components/Footer";
import TestFeatures from "@/components/TestFeatures";





 function App({ Component, pageProps  }) {
  return (
    <ChakraProvider >
      <CSSReset />
      <Component{...pageProps} />
      <Navbar />
      <Header />
      <TestFeatures/>
      <Pricing />
      <Footer />
    </ChakraProvider>  
  )
}
export default App


