import type { Metadata } from "next";
import { Geist, Geist_Mono, Instrument_Serif } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const instrumentSerif = Instrument_Serif({
  variable: "--font-instrument-serif",
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
});

const siteUrl = "https://pluginentrepreneur.com";
const description =
  "I'm a builder. I plug into businesses to make them run. Fractional operator and exited founder, operationalising what's messy, productising what's stuck, and building the systems that fuel growth.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Plug In Entrepreneur · Fractional operator & exited founder",
    template: "%s · Plug In Entrepreneur",
  },
  description,
  keywords: [
    "fractional operator",
    "fractional COO",
    "exited founder",
    "startup operator",
    "operations consultant",
    "scaling consultant",
    "Plug In Entrepreneur",
  ],
  authors: [{ name: "Plug In Entrepreneur" }],
  creator: "Plug In Entrepreneur",
  openGraph: {
    type: "website",
    url: siteUrl,
    title: "Plug In Entrepreneur · Fractional operator & exited founder",
    description,
    siteName: "Plug In Entrepreneur",
    locale: "en_GB",
  },
  twitter: {
    card: "summary_large_image",
    title: "Plug In Entrepreneur",
    description,
  },
  alternates: {
    canonical: siteUrl,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${instrumentSerif.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground">
        {children}
      </body>
    </html>
  );
}
