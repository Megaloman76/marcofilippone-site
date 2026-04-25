import "./globals.css";
import Header from "@/components/layout/Header";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="it">
      <body className="bg-[#0B0B0C] text-white">
        <Header />
        {children}
      </body>
    </html>
  );
}