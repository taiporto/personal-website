import Link from "next/link";

export default function Header({
  translations,
}: Readonly<{
  translations: { [key: string]: any };
}>) {
  return (
    <header className="w-full">
      <nav className="w-full">
        <ul className="flex justify-around">
          <li>
            <Link href="/">{translations.nav.home}</Link>
          </li>
          <li>
            <Link href="/about">{translations.nav.about}</Link>
          </li>
          <li>
            <Link href="/blog">{translations.nav.blog}</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
