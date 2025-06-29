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
  const isMobile = (width || 768) < 768;

  const [isMenuExpanded, setIsMenuExpanded] = useState(!isMobile);

  const handleToggleMenu = () => setIsMenuExpanded(!isMenuExpanded);

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
      <AnimatePresence>
        <motion.nav layout transition={{ type: 'tween', ease: 'easeOut', duration: 0.2 }} className="fixed flex flex-col gap-6 items-end md:items-center justify-center right-5 md:right-auto md:w-4/6 mx-auto p-3 md:px-2 md:py-5 rounded-xl text-foreground top-4 font-extrabold uppercase backdrop-blur-[8px] md:backdrop-blur-[4px] backdrop-saturate-[100%] bg-purple-100/40 border border-[#813d9c]/5 drop-shadow-sm z-50">
          {isMobile &&
            <button className="cursor-pointer" onClick={handleToggleMenu}>
              {isMenuExpanded ? <LuX size={24} /> : <LuMenu size={24} />}
            </button>
          }
          <AnimatePresence>
            {isMenuExpanded && (
              isNotHomePage ? (
                <motion.ul layout exit={{ x: 10, opacity: 0 }} className="flex flex-col text-right md:text-center md:flex-row justify-center gap-5 px-2 md:gap-12 text-gray-800">
                  <li>
                    <Link className="hover:text-purple-800 transition-all" href="/">{translations.nav._home}</Link>
                  </li>
                  <li>
                    <Link className="hover:text-purple-800 transition-all" href="/blog">{translations.nav._blog}</Link>
                  </li>
                </motion.ul>
              ) : (
                  <motion.ul layout exit={{ x: 10, opacity: 0 }} className="flex flex-col text-right md:text-center md:flex-row justify-center gap-5 px-2 md:gap-12 text-gray-800">
                    <li>
                      <Link className="hover:text-purple-800 transition-all" href="/#projects">{translations.nav._projects}</Link>
                    </li>
                    <li>
                      <Link className="hover:text-purple-800 transition-all" href="/#experience">{translations.nav._experience}</Link>
                    </li>
                    <li>
                      <Link className="hover:text-purple-800 transition-all" href="/blog">{translations.nav._blog}</Link>
                    </li>
                </motion.ul>
              )
            )
            }
          </AnimatePresence>
        </motion.nav >
      </AnimatePresence >
    </>
  )
}