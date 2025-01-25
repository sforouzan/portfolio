import "./globals.css";

import { Providers } from "@/utilities/providers";

export const metadata = {
  title: "Shirin Forouzan",
  description: "UX/UI & Graphic Designer",
};

export default function RootLayout({ children }) {
  return (
      <html lang="en">
        <body>
          <Providers>
          {children}
          </Providers>
        </body>
      </html>
  );
}
