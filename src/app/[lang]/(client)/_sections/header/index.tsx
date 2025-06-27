'use client';

import { useTranslation } from "@/app/[lang]/_context/translation"
import Image from "next/image";
import me from '../../../../../public/images/me.svg'
import { motion } from "motion/react";

export const Header = () => {
  const { t } = useTranslation();
  return (
    <header>
      <div className="flex items-center justify-between py-10">
        <motion.div className="w-1/2 flex flex-col gap-5">
          <div className="flex flex-col gap-2">
            <span className="text-md text-gray-800">{t("home._title")}</span>
            <div className="bg-gradient-to-r from-purple-900 to-purple-800 bg-clip-text text-transparent">
              <motion.h1
                layout
                transition={{
                  ease: 'easeOut',
                }}
                className="font-extrabold text-6xl">Tai Porto</motion.h1>
            </div>
          </div>
          <p className="text-lg">{t('home._description')}</p>
        </motion.div>
        <div>
          <Image src={me} alt="" width={280} height={300} />
        </div>
      </div>
    </header>
  )
}