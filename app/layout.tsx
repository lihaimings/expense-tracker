import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#ffffff",
};

export const metadata: Metadata = {
  title: {
    default: "Expense Tracker - Simple expense tracking on the go",
    template: "%s | Expense Tracker",
  },
  description: "The Expense Tracker is a mobile-friendly tool designed to help accountants and small business owners manage their expenses efficiently. Our intuitive inter",
  keywords: ["personal expense tracking", "small business expense management"],
  authors: [{ name: "Expense Tracker" }],
  creator: "Expense Tracker",
  publisher: "Expense Tracker",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Expense Tracker",
    title: "Expense Tracker - Simple expense tracking on the go",
    description: "The Expense Tracker is a mobile-friendly tool designed to help accountants and small business owners manage their expenses efficiently. Our intuitive inter",
  },
  twitter: {
    card: "summary_large_image",
    title: "Expense Tracker - Simple expense tracking on the go",
    description: "The Expense Tracker is a mobile-friendly tool designed to help accountants and small business owners manage their expenses efficiently. Our intuitive inter",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} antialiased`}>
        <div className="min-h-screen flex flex-col">
          <Header />
          <main className="flex-1">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
