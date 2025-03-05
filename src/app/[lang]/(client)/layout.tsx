"use client";

import { use } from "react";
import { TranslationProvider } from "../_context/translation";
import { ApolloProvider } from "@apollo/client";
import { hashnodeClient } from "@/lib/apolloClient";

export default function ClientLayout({
  params,
  children,
}: {
  params: Promise<{ lang: string }>;
  children: React.ReactNode;
}) {
  const { lang } = use(params);
  return (
    <ApolloProvider client={hashnodeClient}>
      <TranslationProvider lang={lang}>{children}</TranslationProvider>
    </ApolloProvider>
  );
}
