import type { Metadata } from "next";
import { Halant } from "next/font/google";
import { Inter } from "next/font/google";
import "./globals.css";
import "@/lib/gsap-setup";
import { ServiceWrapper } from "@/components/ServiceWrapper";
import Tag from "@/tag/Tag";
import { getVisualEditScript } from "@/utils/visual-edit-script";
import { Libre_Baskerville } from "next/font/google";
import { Mulish } from "next/font/google";



export const metadata: Metadata = {
  title: 'TÜRK ESTATE – Ihr Traumimmobilie in der Türkei',
  description: 'Exklusive Immobilien & Investmentberatung für Deutschland, Österreich & die Schweiz. Entdecken Sie Luxusimmobilien und hohe Renditechancen in der Türkei.',
  keywords: ["Türk Estate, Immobilien Türkei, Investment Türkei, Luxusimmobilien Türkei, Staatsbürgerschaft Immobilien Türkei, Immobilien Deutschland, Immobilien Österreich, Immobilien Schweiz"],
  openGraph: {
    "title": "TÜRK ESTATE – Ihr Traumimmobilie in der Türkei",
    "description": "Exklusive Immobilien & Investmentberatung für Deutschland, Österreich & die Schweiz. Entdecken Sie Luxusimmobilien und hohe Renditechancen in der Türkei.",
    "url": "https://www.turkestate.com",
    "siteName": "TÜRK ESTATE",
    "images": [
      {
        "url": "http://img.b2bpic.net/free-photo/view-st-petersburg-sunset_1398-2729.jpg",
        "alt": "Istanbul Bosphorus View"
      }
    ],
    "type": "website"
  },
  twitter: {
    "card": "summary_large_image",
    "title": "TÜRK ESTATE – Ihr Traumimmobilie in der Türkei",
    "description": "Exklusive Immobilien & Investmentberatung für Deutschland, Österreich & die Schweiz. Entdecken Sie Luxusimmobilien und hohe Renditechancen in der Türkei.",
    "images": [
      "http://img.b2bpic.net/free-photo/view-st-petersburg-sunset_1398-2729.jpg"
    ]
  },
  robots: {
    "index": true,
    "follow": true
  },
};


const mulish = Mulish({
  variable: "--font-mulish",
  subsets: ["latin"],
});
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <ServiceWrapper>
        <body className={`${mulish.variable} ${inter.variable} antialiased`}>
          <Tag />
          {children}
          <script
              dangerouslySetInnerHTML={{
                  __html: `${getVisualEditScript()}`
              }}
          />
        </body>
      </ServiceWrapper>
    </html>
  );
}
