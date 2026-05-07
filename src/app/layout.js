import Navigation from "@/components/Navigation/Navigation";
import Footer from "@/components/Footer/Footer";
import "./globals.css";
import StarTrail from "@/components/StarTrail/StarTrail";
import { Providers } from "@/utilities/providers";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/* 1. Add the head section here */}
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link 
          href="https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,100..1000;1,9..40,100..1000&display=swap" 
          rel="stylesheet" 
        />
      </head>
      
      <body className="bg-custom-black text-milk-white">
        <Providers>
          <StarTrail/>
          <Navigation />
          <main>
            {children}
            <div>
              <Footer theme={'light'} />
            </div>
          </main>
        </Providers>
      </body>
    </html>
  );
}