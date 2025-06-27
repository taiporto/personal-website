'use client';

import { Navigation } from "./Navigation";

export default function Header({
  translations,
}: Readonly<{
  translations: Record<string, Record<string, string>>;
}>) {
  return (
    <header className="main-header col-start-1 col-end-4 flex items-center justify-center h-[66px]">
      <Navigation translations={translations} />
    </header>
  );
}
