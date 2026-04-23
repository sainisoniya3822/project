<<<<<<< HEAD

       

       
=======

import Footer from "@/components/FooterSection";
import "./globals.css";
import Navbar from '@/components/Navbar'



export default function RootLayout({ children }) {
  return (
    <html
     
    >
      <body >
        <Navbar/>
        {children}
        <Footer/>
        </body>
    </html>
  );
}
>>>>>>> 778aeae6af3d93825a1621b7fdc7f9281aef8520
