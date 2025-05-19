'use client';

import { useTranslation } from "../_context/translation";
import Image from "next/image";
import { Projects } from "./_sections/Projects";
import { Experience } from "./_sections/Experience";
import { Education } from "./_sections/Education";
import { Stack } from "./_sections/Stack";

export default function Home() {
  const { t } = useTranslation();
  return (
    <div>
      <header>
        <div className="flex items-center justify-between p-10 px-20">
          <div className="w-1/2">
            <span>{t("home.title")}</span>
            <h1 className="font-extrabold text-4xl">Tai Porto</h1>
            <p>{t('home.description')}</p>
          </div>
          <div>
            <Image src="/public/images/me.svg" alt="" width={200} height={200} />
          </div>
        </div>
      </header>
      <Projects />
      <Experience />
      <Education />
      <Stack />
    </div>
  );
}
