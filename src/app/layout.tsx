import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import {QueryClient, QueryClientProvider} from "react-query";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Blindma1den",
  description: "Blindma1den",
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
    <body className={inter.className}>{children}</body>
    </html>
  );
}
