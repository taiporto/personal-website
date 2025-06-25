import Projects from "./_sections/projects";
import Experience from "./_sections/experience";
import { Header } from "./_sections/header";
import { Lang } from "@/app/types";

export default async function Home({
  params,
}: Readonly<{
  params: Promise<{ lang: Lang }>;
}>) {
  const { lang } = await params;
  return (
    <div>
      <Header />
      <hr className="text-gray-300" />
      <Projects locale={lang} />
      <Experience locale={lang} />
    </div>
  );
}
