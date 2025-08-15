import { Geist, Geist_Mono, Figtree } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const figtree = Figtree({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-figtree",
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Ven Andrei Manacop | Full-Stack Developer Portfolio",
  description:
    "Portfolio of Ven Andrei Manacop, a Full-Stack Developer specializing in PERN stack and modern web development. Explore projects, skills, and contact information.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={figtree.variable}>
      <head>
        {/* Page Title */}
        <title>{metadata.title}</title>

        {/* Meta Description */}
        <meta name="description" content={metadata.description} />

        {/* Favicon (SVG with initials VAM) */}
        <link rel="icon" href="/assets/logo.svg" type="image/svg+xml" />
      </head>

      <body
        className={`${geistSans.variable} ${geistMono.variable} font-figtree antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
