import type { Metadata } from "next";
import { DM_Sans, Playfair_Display } from "next/font/google";
import Link from "next/link";
import { Providers } from "@/app/providers";
import { SiteHeader } from "@/components/site-header";
import "./globals.css";

const dmSans = DM_Sans({ variable: "--font-dm-sans", subsets: ["latin"] });
const playfair = Playfair_Display({ variable: "--font-playfair", subsets: ["latin"] });

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL
  ?? `https://${process.env.VERCEL_URL ?? "full-fledged-blog-application-next-js.vercel.app"}`;

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "The Margin — stories for curious minds",
    template: "%s | The Margin",
  },
  description: "Essays and observations for a more thoughtful everyday.",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    siteName: "The Margin",
    title: "The Margin — stories for curious minds",
    description: "Essays and observations for a more thoughtful everyday.",
  },
  twitter: {
    card: "summary_large_image",
    title: "The Margin — stories for curious minds",
    description: "Essays and observations for a more thoughtful everyday.",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${dmSans.variable} ${playfair.variable}`}>
      <body>
        <Providers>
          <SiteHeader />
          {children}
          <footer className="site-footer" id="about">
            <Link className="wordmark" href="/">the margin<span aria-hidden="true">.</span></Link>
            <p>A journal for curious minds. Made for the space between things.</p>
            <span>© 2026 The Margin</span>
          </footer>
        </Providers>
      </body>
    </html>
  );
}
