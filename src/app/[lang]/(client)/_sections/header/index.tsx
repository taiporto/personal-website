'use client';

import { useTranslation } from "@/app/[lang]/_context/translation"
import Image from "next/image";
import me from '../../../../../public/images/me.svg'
import { motion } from "motion/react";
import { Title } from "@/app/[lang]/_components/Title";

export const Header = () => {
  const { t } = useTranslation();
  return (
    <header>
      <div className="flex items-center justify-between pb-10 md:py-10">
        <motion.div className="md:w-1/2 flex flex-col gap-5">
          <div className="flex flex-col gap-2">
            <span className="text-md text-gray-800">{t("home._title")}</span>
            <Title size="6xl" Tag="h1">
              Tai Porto
            </Title>
          </div>
          <p className="text-lg">{t('home._description')}</p>
        </motion.div>
        <div className="hidden md:block">
          <Image src={me} alt="" width={280} height={300} />
        </div>
      </div>
    </header>
  )
}