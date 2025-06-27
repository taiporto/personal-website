'use client';

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header({
  translations,
}: Readonly<{
  translations: Record<string, Record<string, string>>;
}>) {
  const pathname = usePathname();
  const isBlogPage = pathname.includes("/blog");
  const isProjectPage = pathname.includes("/project");

  return (
    <header className="main-header col-start-1 col-end-4 flex items-center justify-center h-[66px]">
      <nav className="w-4/6 mx-auto px-2 py-5 rounded-xl text-foreground fixed top-4 font-extrabold uppercase backdrop-blur-[4px] backdrop-saturate-[100%] bg-purple-100/40 border border-[#813d9c]/5 drop-shadow-sm z-50">
        {isBlogPage || isProjectPage ? (
          <ul className="flex justify-center gap-12 text-gray-800">
            <li>
              <Link className="hover:text-purple-800 transition-all" href="/">{translations.nav._home}</Link>
            </li>
            <li>
              <Link className="hover:text-purple-800 transition-all" href="/blog">{translations.nav._blog}</Link>
            </li>
          </ul>
        ) : (
          <ul className="flex justify-center gap-12 text-gray-800">
              <li>
                <Link className="hover:text-purple-800 transition-all" href="/#projects">{translations.nav._projects}</Link>
              </li>
              <li>
                <Link className="hover:text-purple-800 transition-all" href="/#experience">{translations.nav._experience}</Link>
              </li>
          <li>
                <Link className="hover:text-purple-800 transition-all" href="/blog">{translations.nav._blog}</Link>
          </li>
            </ul>
        )}
      </nav>
    </header>
  );
}
