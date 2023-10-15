
import { ChakraProvider, CSSReset} from "@chakra-ui/react"; 
import {Header} from '../components/Header'
import { Pricing } from '@/components/Plans'
import Navbar from '../components/Navbar'
import { Footer } from "@/components/Footer";
import TestFeatures from "@/components/TestFeatures";





 function App({ Component, pageProps  }) {
  return (
    <ChakraProvider >
      <CSSReset />
      <Component{...pageProps} />
    </ChakraProvider>  
  )
}
export default App


