import type { Metadata } from "next";
import { Geist, Inter } from "next/font/google";
import "./globals.css";

const InterSans = Inter({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${InterSans.className} antialiased px-8 py-10`}
      >
        {children}
      </body>
    </html>
  );
}
