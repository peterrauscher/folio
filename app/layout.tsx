import type { Metadata } from "next";
import { Inter as Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/Footer";
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
        <div className="flex min-h-screen flex-col">
          <div className="flex-1">{children}</div>
          <Footer />
        </div>
        <Navbar />
      </body>
    </html>
  );
}
