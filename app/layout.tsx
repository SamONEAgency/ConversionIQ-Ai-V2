import type { Metadata } from "next";
import { Sora, Inter } from "next/font/google";
import "./globals.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { AOSProvider } from "@/components/AOSProvider";

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "P1 – Homepage – ConversionIQ",
  description: "Deploy AI sales agents that identify, engage, and convert prospects across every channel. Works with your CRM. Live in minutes.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${sora.variable} ${inter.variable} font-sans antialiased bg-white`}
      >
        <AOSProvider>
          {children}
        </AOSProvider>
      </body>
    </html>
  );
}
