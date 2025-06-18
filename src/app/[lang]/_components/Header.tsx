import Link from "next/link";

export default function Header({
  translations,
}: Readonly<{
  translations: { [key: string]: any };
}>) {
  return (
    <header className="main-header col-start-1 col-end-4 flex items-center justify-center h-[66px]">
      <nav className="w-4/6 mx-auto px-2 py-5 rounded-xl text-foreground fixed top-4 font-extrabold uppercase backdrop-blur-[4px] backdrop-saturate-[100%] bg-gray-50/10 border border-[#813d9c]/5 drop-shadow-sm z-50">
        <ul className="flex justify-center gap-12">
          <li>
            <Link className="hover:underline" href="/">{translations.nav._home}</Link>
          </li>
          <li>
            <Link className="hover:underline" href="#projects">{translations.nav._projects}</Link>
          </li>
          <li>
            <Link className="hover:underline" href="#stack">Stack</Link>
          </li>
          <li>
            <Link className="hover:underline" href="#experience">{translations.nav._experience}</Link>
          </li>
          <li>
            <Link className="hover:underline" href="/blog">{translations.nav._blog}</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
