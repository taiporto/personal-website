import Projects from "./_sections/projects";
import { Experience } from "./_sections/Experience";
import { Stack } from "./_sections/Stack";
import { Header } from "./_sections/header";
import { Lang } from "@/app/types";

export default async function Home({
  params,
}: Readonly<{
  params: { lang: Lang };
}>) {
  const { lang } = await params;
  return (
    <div>
      <Header />
      <hr className="text-gray-300" />
      <Projects locale={lang} />
      <Stack />
      <Experience />
    </div>
  );
}
