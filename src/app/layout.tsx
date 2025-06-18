import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "sonner";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// app/layout.tsx or app/page.tsx

export const metadata: Metadata = {
  title: "NeuralBind – Custom Software, Apps & Digital Solutions | Bangladesh & Global",
  description: "NeuralBind offers affordable, high-quality software, website, mobile app development, digital marketing, and cybersecurity solutions. Binding your digital dots – vision to execution.",
  keywords: [
    "NeuralBind",
    "Software Company Bangladesh",
    "Web Development",
    "App Development",
    "Digital Marketing",
    "Cybersecurity",
    "AI Solutions",
    "Custom Software",
    "SEO Services",
    "IT Solutions"
  ],
  authors: [{ name: "NeuralBind Team", url: "https://www.neuralbind.com" }],
  creator: "NeuralBind"
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Toaster />
        {children}
      </body>
    </html>
  );
}
