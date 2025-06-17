import Projects from "./_sections/projects";
import { Experience } from "./_sections/Experience";
import { Education } from "./_sections/Education";
import { Stack } from "./_sections/Stack";
import { Header } from "./_sections/header";

export default async function Home({
  params,
}: Readonly<{
  params: { lang: string };
}>) {
  const { lang } = await params;
  return (
    <div>
      <Header />
      <hr className="text-gray-300" />
      <Projects locale={lang} />
      <Experience />
      <Education />
      <Stack />
    </div>
  );
}
