//import { useState } from "react";
import { ChakraProvider, CSSReset } from "@chakra-ui/react"; 
import {Header} from '../components/Header'
import { Pricing } from '@/components/Pricing'
import Navbar from '../components/Navbar'
import { Footer } from "@/components/Footer";
import FeatureSections from "@/components/FeatureSections";
import TestFeatures from "@/components/TestFeatures";
import { Mathric } from "@/components/Mathric";



const feature = [{
  color: "gold",
  title: "Invoicing",
  image: "./shago.png",
  description: "With Shago you will be able to print Invoices of every transactions established with your customers.You can also share the invoices via all document sharing media available at your disposal with a single click "
}, 
{
  color: "green",
  title: "Staff Management",
  image: "./shago.png",
  description: "Shago has a staff management section where you would  be able to onboard your staff and assign to them roles such as Manager, and Salesperson. This enables you to be in control of the features accessible to them. A significant benefits Shago provides you with is that it allows your staff access to these features under your license" },  
{
  color: "blue",
  title: "Reports",
  image: "./shago.png",
  description: "Within the power of Shago lies realtime comrehensive report of transactions going on in your store detailing the profit generated on every item sold within a time period, this helps you track which item generate more profit and how often the items leaves the shelf"
},
{  color: "brown",
  title: "Multi-Shop management",
  image: "./shago.png",
  description: "Pay for one Admin account and have access to multiple shops. Shago allows you to manage more than one shop at different locations with a single licence, you will be able to view sales reports, manage the staffs, stock & restock and establish sales from other outlets without issues." }
]


 function App({ Component, pageProps  }) {
  return (
    
    <ChakraProvider >
      <CSSReset />
      <Component{...pageProps} />
      <Navbar />
      <Header />
      <FeatureSections buttonText = {feature[1].title}
                       sectionText= {feature[1].description}             
      />
      <TestFeatures/>
      <Pricing />
      <Footer />
      <Mathric/>
    </ChakraProvider>
     
   
    
    
  )
}
export default App


