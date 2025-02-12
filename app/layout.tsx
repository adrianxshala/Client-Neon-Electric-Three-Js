import "./globals.css";
import type { Metadata } from "next";
import { Inter, Lexend, Orbitron } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });
const lexend = Lexend({ subsets: ["latin"] });
export const metadata: Metadata = {
  title: "Neon Electric",
  description:
    "Neon Electric is a creative agency that specializes in creating digital experiences.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={lexend.className}>{children}</body>
    </html>
  );
}
