import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Akshat Kansara – Full-Stack Developer",
  description:
    "Full-Stack Developer with 2.5+ years of experience in Node.js, React.js, Next.js, and AI Engineering. Based in Ahmedabad, India. Open to Software Engineer roles.",
  keywords: [
    "Full-Stack Developer",
    "React.js",
    "Next.js",
    "Node.js",
    "React",
    "PostgreSQL",
    "AI Engineering",
  ],
  authors: [{ name: "Akshat Kansara" }],
  openGraph: {
    title: "Akshat Kansara – Full-Stack Developer",
    description:
      "Full-Stack Developer with 2.5+ years of experience in Node.js, React.js, Next.js, and AI Engineering.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable}`}>
      <body className="bg-[#0c0c0c] text-[#e8e4df] antialiased font-[var(--font-sans)]">
        {children}
      </body>
    </html>
  );
}
