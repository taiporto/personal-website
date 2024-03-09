import { useTranslations } from "next-intl";

export default function AboutPage() {
  const t = useTranslations("about");
  return (
    <div>
      <h1>{t("title")}</h1>
      <p>{t("content")}</p>
    </div>
  );
}
