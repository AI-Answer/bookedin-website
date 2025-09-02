import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "BookedIn - Convert leads into meetings for your clients",
  description: "BookedIn automatically reaches out and nurtures leads via Phone, SMS, Whatsapp, Email, and Social Media DMs and turns them into potential customers - under your brand.",
  icons: {
    icon: [
      {
        url: "/favicon.ico?v=1",
        sizes: "any",
      },
    ],
    shortcut: "/favicon.ico?v=1",
    apple: "/favicon.ico?v=1",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico?v=1" sizes="any" />
        <link rel="shortcut icon" href="/favicon.ico?v=1" />
        <link rel="apple-touch-icon" href="/favicon.ico?v=1" />
        <meta name="theme-color" content="#305AE3" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
