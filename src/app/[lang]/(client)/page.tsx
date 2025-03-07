'use client';

import styles from "./page.module.css";
import { useTranslation } from "../_context/translation";

export default function Home() {
  const { t } = useTranslation();
  return (
    <div className={styles.page}>
      <div>{t("test.hello")}</div>
    </div>
  );
}
