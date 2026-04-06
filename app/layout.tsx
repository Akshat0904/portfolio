import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geist = Geist({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Akshat Kansara – Full-Stack Developer",
  description:
    "Full-Stack Developer with 3+ years of experience in MERN stack, Next.js, and AI Engineering. Based in Ahmedabad, India. Open to Software Engineer roles.",
  keywords: [
    "Full-Stack Developer",
    "MERN Stack",
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
      "Full-Stack Developer with 3+ years of experience in MERN stack, Next.js, and AI Engineering.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={geist.className}>
      <body className="bg-[#f8fafc] text-[#0f172a] antialiased">
        {children}
      </body>
    </html>
  );
}
