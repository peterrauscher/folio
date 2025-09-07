import type { Metadata } from "next";
import { Inter as Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";
import { cn } from "@/lib/utils";

const sans = Sans({
  variable: "--font-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Peter Rauscher",
  description: "Software Engineer @ Perpay",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          "min-h-screen font-sans antialiased py-12 sm:py-16",
          sans.variable
        )}
      >
        {children}
        <Navbar />
      </body>
    </html>
  );
}
