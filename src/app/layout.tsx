import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Dashboard Treino",
  description: "Ferreira FullStack",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br"  className="h-full w-full">
      <body
        className="h-full w-full"
      >
        {children}
      </body>
    </html>
  );
}
