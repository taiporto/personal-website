'use client'

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useWindowSize } from "@uidotdev/usehooks";
import { LuMenu, LuX } from "react-icons/lu";
import { useState } from "react";
import { AnimatePresence, motion } from 'motion/react';
import me from '../../../../public/images/me.svg'
import Image from "next/image";

export const Navigation = ({
  translations,
}: Readonly<{
  translations: Record<string, Record<string, string>>;
}>) => {
  const pathname = usePathname();
  const isBlogPage = pathname.includes("/blog");
  const isProjectPage = pathname.includes("/project");
  const isNotHomePage = isBlogPage || isProjectPage;

  const { width } = useWindowSize();
  const isMobile = width && width < 768;

  const [isMenuExpanded, setIsMenuExpanded] = useState(false);

  const handleToggleMenu = () => setIsMenuExpanded(!isMenuExpanded);

  const homePageItems = [
    {
      label: translations.nav._projects,
      href: "/#projects"
    },
    {
      label: translations.nav._experience,
      href: "/#experience"
    },
    {
      label: translations.nav._blog,
      href: "/blog"
    },
  ]

  const nonHomePageItems = [
    {
      label: translations.nav._home,
      href: "/"
    },
    {
      label: translations.nav._blog,
      href: "/blog"
    },
  ]

  return (
    <>
      {isMobile && isNotHomePage && (
        <Link href="/">
          <Image
            src={me}
            alt="Tai Porto"
            width={50}
            height={50}
            className="absolute left-5 top-4"
          />
        </Link>
      )}
      {isMobile ? (
        <AnimatePresence>
          <motion.nav layout transition={{ type: 'tween', ease: 'easeOut', duration: 0.2 }} className="fixed flex flex-col gap-6 items-end justify-center right-5 mx-auto p-3 rounded-xl text-foreground top-4 font-extrabold uppercase backdrop-blur-[8px] backdrop-saturate-[100%] bg-purple-100/40 border border-[#813d9c]/5 drop-shadow-sm z-50">
            <button className="cursor-pointer" onClick={handleToggleMenu}>
              {isMenuExpanded ? <LuX size={24} /> : <LuMenu size={24} />}
            </button>
            <AnimatePresence>
              {isMenuExpanded && (
                  <motion.ul layout exit={{ x: 10, opacity: 0 }} className="flex flex-col text-right justify-center gap-5 px-2 text-gray-800">
                  {isNotHomePage ? nonHomePageItems.map((item) => (
                    <li key={item.href}>
                      <Link className="hover:text-purple-800 transition-all" href={item.href}>{item.label}</Link>
                    </li>
                  )) : homePageItems.map((item) => (
                    <li key={item.href}>
                      <Link className="hover:text-purple-800 transition-all" href={item.href}>{item.label}</Link>
                    </li>
                  ))}
                </motion.ul>
              )
              }
            </AnimatePresence>
          </motion.nav >
        </AnimatePresence >

      ) : (
        <nav className="fixed flex flex-col gap-6 items-center justify-center w-4/6 mx-auto px-2 py-5 rounded-xl text-foreground top-4 font-extrabold uppercase backdrop-blur-[4px] backdrop-saturate-[100%] bg-purple-100/40 border border-[#813d9c]/5 drop-shadow-sm z-50">
          {
            (
              <ul className="flex text-center justify-center px-2 gap-12 text-gray-800">
               {isNotHomePage ? nonHomePageItems.map((item) => (
                    <li key={item.href}>
                      <Link className="hover:text-purple-800 transition-all" href={item.href}>{item.label}</Link>
                    </li>
                  )) : homePageItems.map((item) => (
                    <li key={item.href}>
                      <Link className="hover:text-purple-800 transition-all" href={item.href}>{item.label}</Link>
                    </li>
                  ))}
              </ul>
            )

          }
        </nav>
      )}
    </>
  )
}