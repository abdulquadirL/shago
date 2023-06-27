//import Layout from '../components/Layout'
import { ChakraProvider, CSSReset } from "@chakra-ui/react";

//import '../styles/globals.css' 
import {Header} from '../components/Header'
//import { Features } from '@/components/Features'
import Navbar from '../components/Navbar'

 function App({ Component, pageProps }) {
  return (
    
    <ChakraProvider>
      <CSSReset />
      <Component{...pageProps} />
      <Navbar />
      <Header />
      
    </ChakraProvider>
      //<Component {...pageProps} />
   
    
    
  )
}
export default App


