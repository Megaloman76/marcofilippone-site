import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Marco Filippone",
  description: "Cybersecurity & CISO Manager",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="it">
      <body>{children}</body>
    </html>
  );
}