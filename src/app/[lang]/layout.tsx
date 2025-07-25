/* eslint-disable @typescript-eslint/no-require-imports */
import type { Metadata } from "next";
import { Mulish, Roboto_Slab } from "next/font/google";
import "./globals.css";
import Header from "@/app/[lang]/_components/Header";

const mulish = Mulish({
  variable: "--font-mulish",
  subsets: ["latin"],
});

const robotoSlab = Roboto_Slab({
  variable: "--font-roboto-slab",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Tai Porto",
  description: "Personal Website | Website pessoal",
};

export default async function RootLayout({
  params,
  children,
}: Readonly<{
  params: Promise<{ lang: string }>;
  children: React.ReactNode;
}>) {
  const { lang } = await params;
  const translations = require(`../../dictionaries/${lang}.json`);
  return (
    <html lang={lang}>
      <body className={`${mulish.variable} ${robotoSlab.variable} scroll-smooth h-dvh`}>
        <Header translations={translations} />
        <main>{children}</main>
        <footer className="w-full col-start-1 col-end-4">
          <div className="flex justify-center items-end h-20">
            <p>© {new Date().getFullYear()} Tai Porto</p>
          </div>
        </footer>
      </body>
    </html>
  );
}
