import Navigation from "@/components/Navigation/Navigation";
import Footer from "@/components/Footer/Footer";
import "./globals.css";

import { Providers } from "@/utilities/providers";

export default function RootLayout({ children }) {
  return (
      <html lang="en">
        <body className="bg-custom-black text-milk-white">
          <Providers>
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
