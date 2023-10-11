import { ClerkProvider } from "@clerk/nextjs";
import React from "react";
import { Inter, Space_Grotesk } from "next/font/google";
import { Metadata } from "next";

import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font_inter",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font_spaceGrotesk",
});

export const metadata: Metadata = {
  title: "Codenexium",
  description:
    "It is a community-driven platform where developers can ask and answer questions, share code, and learn from each other. Codenexium is a valuable resource for developers of all skill levels, and it can help you to improve your coding skills, get help with your projects, and stay up-to-date on the latest trends and technologies in the development world.",
  icons: "/assets/images/site-logo.svg",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider
      appearance={{
        elements: {
          formButtonPrimary: "primary-gradient",
          footerActionLink: "primary-text-gradient hover:text-primary-text-500",
        },
      }}
    >
      <html lang='en'>
        <body className={`${inter.variable} ${spaceGrotesk.variable}`}>
          <h1 className='h1-bold'>Lorem ipsum dolor amet</h1>
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
