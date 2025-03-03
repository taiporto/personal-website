`use client`;

import { use } from "react";
import { TranslationProvider } from "../_context/translation";

export default function ClientLayout({
  params,
  children,
}: {
  params: Promise<{ lang: string }>;
  children: React.ReactNode;
}) {
  const { lang } = use(params);
  return <TranslationProvider lang={lang}>{children}</TranslationProvider>;
}
