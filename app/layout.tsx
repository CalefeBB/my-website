import type { Metadata } from "next";
import { Dancing_Script, Lato } from "next/font/google";
import "./globals.css";

const dancingScript = Dancing_Script({
  variable: "--font-dancing",
  subsets: ["latin"],
  weight: ["400", "700"],
});

const lato = Lato({
  variable: "--font-lato",
  subsets: ["latin"],
  weight: ["300", "400", "700"],
});

export const metadata: Metadata = {
  title: "Para Maria Alice ❤️",
  description: "Uma página feita com amor para você.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${dancingScript.variable} ${lato.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
