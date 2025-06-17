'use client';

import { useTranslation } from "@/app/[lang]/_context/translation"
import Image from "next/image";
import me from '../../../../../public/images/me.svg'

export const Header = () => {
  const {t} = useTranslation();
  return (
    <header>
        <div className="flex items-center justify-between py-15">
          <div className="w-1/2 flex flex-col gap-5">
            <div className="flex flex-col gap-2">
              <span className="text-lg">{t("home._title")}</span>
              <h1 className="font-extrabold text-6xl">Tai Porto</h1>
            </div>
            <p className="text-lg">{t('home._description')}</p>
          </div>
          <div>
            <Image src={me} alt="" width={280} height={300} />
          </div>
        </div>
      </header>
  )
}