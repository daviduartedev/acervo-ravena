import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Acervo Ravena Cassino Hotel",
  description:
    "Um acervo documental preservando o legado, a arquitetura e as histórias do emblemático Ravena Cassino Hotel em Laguna - Santa Catarina.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className="min-h-screen bg-background font-sans text-foreground antialiased">
        {children}
      </body>
    </html>
  );
}
