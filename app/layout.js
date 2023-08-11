import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
export const metadata = {
  title: 'DreamXpert',
  description: 'Generated by Siddharth',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body>
        <Navbar/> 
        {children}
        <Footer/>
        </body>
    </html>
  )
}