import { ScreenSizeProvider } from "@/context/ScreenSizeContext";
import type { Metadata } from "next";
import { DM_Sans, Oswald } from "next/font/google";
import "./globals.css";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["400", "700"],
});

const oswald = Oswald({
  variable: "--font-oswald",
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "SoybeanSec - 黄豆安全实验室",
  description: "黄豆安全实验室",
  authors: [{ name: "MOBAI", url: "https://github.com/Artist-MOBAI" }],
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${dmSans.variable} ${oswald.variable} antialiased`}>
        <ScreenSizeProvider>{children}</ScreenSizeProvider>
      </body>
    </html>
  );
}
