
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
