"use client";

import { useTranslation } from "@/app/[lang]/_context/translation"
import { Experience } from "../types";
import Image from "next/image";
import { Title } from "@/app/[lang]/_components/Title";

export const ExperienceClientComponent = ({
  experiences
}: {
  experiences: Experience[];
}) => {
  const { t } = useTranslation();
  return (
    <>
      <Title size="4xl" Tag="h2">
        {t('home.experience._title')}
      </Title>
      <div className="flex flex-wrap justify-center items-center gap-4 md:gap-0 md:grid md:grid-cols-4 md:px-20">
        {experiences.map((experience: Experience) => (
          <div key={experience.id} className="w-30 md:max-w-40 flex items-center justify-center p-4 rounded-lg mt-4 saturate-0 grayscale">
            <Image
              src={experience.companyLogo}
              alt={experience.companyName}
              width={200}
              height={50}
              className="object-contain"
            />
          </div>
        ))}
      </div>
    </>
  )
}