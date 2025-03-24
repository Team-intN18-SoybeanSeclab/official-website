import "./globals.css";

import { Fjalla_One } from "next/font/google";
import type { Metadata } from "next";

const fjallaOne = Fjalla_One({
  variable: "--font-fjalla-one",
  subsets: ["latin"],
  weight: ["400"],
});

export const metadata: Metadata = {
  title: "Soybean SEC",
  description: "Soybean SEC",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${fjallaOne.variable} antialiased`}>{children}</body>
    </html>
  );
}
