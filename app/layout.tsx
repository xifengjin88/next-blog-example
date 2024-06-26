import { cn } from "@/lib/utils";
import "./globals.css";
import type { Metadata } from "next";
import { Toaster } from "sonner";

import { Inter as FontSans } from "next/font/google";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable
        )}
      >
        {children}
        <Toaster position="top-center" />
      </body>
    </html>
  );
}
