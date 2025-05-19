import Link from "next/link";

export default function Header({
  translations,
}: Readonly<{
  translations: { [key: string]: any };
}>) {
  return (
    <header className="main-header w-full">
      <nav className="w-full p-2 py-4 bg-purple-800 text-white font-extrabold uppercase">
        <ul className="flex justify-center gap-12">
          <li>
            <Link className="hover:underline" href="/">{translations.nav._home}</Link>
          </li>
          <li>
            <Link className="hover:underline" href="/about">{translations.nav._about}</Link>
          </li>
          <li>
            <Link className="hover:underline" href="/blog">{translations.nav._blog}</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
