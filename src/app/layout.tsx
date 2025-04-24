import type { Metadata } from "next";
import { Barlow, Playfair_Display } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const barlow = Barlow({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-barlow",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-playfair",
});

export const metadata: Metadata = {
  title: "Twórczyni Sukcesu",
  description: "Stwórzmy razem Twój sukces",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pl">
      <head>
        <Script
          id="cookieyes"
          strategy="beforeInteractive"
          src="https://cdn-cookieyes.com/client_data/8f8da6b6c07982158b43b56f/script.js"
        />
      </head>
      <body className={`${barlow.variable} ${playfair.variable} font-barlow`}>
        {children}
      </body>
    </html>
  );
}
