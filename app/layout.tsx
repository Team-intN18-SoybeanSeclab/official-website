import "./globals.css";

import { Fjalla_One, Oswald } from "next/font/google";

import type { Metadata } from "next";

const fjallaOne = Fjalla_One({
  variable: "--font-fjalla-one",
  subsets: ["latin"],
  weight: ["400"],
});

const defaultFont = Oswald({
  subsets: ["latin"],
  variable: "--font-oswald",
  weight: ["200", "300", "400", "500", "600", "700"],
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
      <body
        className={`${fjallaOne.variable} ${defaultFont.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
