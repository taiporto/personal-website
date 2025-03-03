export default function Header({
  translations,
}: Readonly<{
  translations: { [key: string]: any };
}>) {
  return (
    <header className="w-full">
      <nav className="w-full flex align-between">
        <ul>
          <li>
            <a href="/">{translations.nav.home}</a>
          </li>
          <li>
            <a href="/about">{translations.nav.about}</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};
