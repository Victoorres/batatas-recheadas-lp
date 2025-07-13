import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Curso batatas recheadas",
  description:
    "Aprenda a fazer deliciosas batatas recheadas com técnicas profissionais. Receitas exclusivas, dicas de preparo e muito mais para você se tornar um especialista na arte das batatas recheadas.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
