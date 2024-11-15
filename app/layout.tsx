import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Header from "@/components/header";
import Providers from "@/components/provider/react-query";
import Footer from "@/components/footer";
import { Separator } from "@/components/ui/separator";
// Load custom fonts
const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

// Metadata for SEO
export const metadata: Metadata = {
  title: "SOIES Nepal",
  description: "Society of Industrial Engineering Students - SOIES Nepal",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen `}
      >
        <Providers>
          <Header />
          <main>{children}</main>
          <Separator className='my-4' />
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
