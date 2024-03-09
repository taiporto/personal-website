import { useTranslations } from "next-intl";
import { Link } from "../navigation";
import React from "react";

export const Header = () => {
  const t = useTranslations("navbar");
  return (
    <header className="bg-gray-200 shadow">
      <nav className="container flex px-2 py-2 gap-5 ">
        <Link href="/">{t("home")}</Link>
        <Link href="/about">{t("about")}</Link>
      </nav>
    </header>
  );
};
