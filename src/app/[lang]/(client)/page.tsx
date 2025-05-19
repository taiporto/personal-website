'use client';

import { useTranslation } from "../_context/translation";
import Image from "next/image";
import { Projects } from "./_sections/projects";
import { Experience } from "./_sections/Experience";
import { Education } from "./_sections/Education";
import { Stack } from "./_sections/Stack";

export default function Home() {
  const { t } = useTranslation();
  return (
    <div>
      <header>
        <div className="flex items-center justify-between p-10 px-20">
          <div className="w-1/2 flex flex-col gap-2">
            <div>
              <span className="text-lg">{t("home._title")}</span>
              <h1 className="font-extrabold text-6xl">Tai Porto</h1>
            </div>
            <p className="text-lg">{t('home._description')}</p>
          </div>
          <div>
            <Image src="/me.png" alt="" width={200} height={200} />
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
