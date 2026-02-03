import type { Metadata } from "next";
import { Playfair_Display, Outfit } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Panchy Restaurant - Zarqa",
  description: "Experience the best burgers and international cuisine in Zarqa.",
};

import { LanguageProvider } from "@/context/LanguageContext";
import { CartProvider } from "@/context/CartContext";
import AnimatedBackground from "@/components/AnimatedBackground";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${playfair.variable} ${outfit.variable} antialiased bg-panchy-bg text-white`}
      >
        <LanguageProvider>
          <CartProvider>
            <AnimatedBackground />
            <div className="relative z-10">
              {children}
            </div>
          </CartProvider>
        </LanguageProvider>
      </body>
    </html>
  );
}
