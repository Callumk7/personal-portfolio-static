import { Navbar } from "@/components/navigation/navbar";
import "./globals.css";
import type { Metadata } from "next";
import { Inconsolata, Inter, Space_Grotesk, Syne } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});
const syne = Syne({
  subsets: ["latin"],
  variable: "--font-syne",
  display: "swap",
});
const inconsolata = Inconsolata({
  subsets: ["latin"],
  variable: "--font-inconsolata",
  display: "swap",
});
const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-grotesk",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Callum Kloos - Building with Love",
  description:
    "Callum Kloos is a Developer and Designer with years of experience in the tech industry",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${syne.variable} ${inconsolata.variable} ${spaceGrotesk.variable} bg-background font-grotesk text-foreground`}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
