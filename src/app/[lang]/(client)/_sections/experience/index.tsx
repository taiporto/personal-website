import { Lang } from "@/app/types";
import { getExperiences } from "../../_api/getExperiences";
import { ExperienceClientComponent } from "./client";

export default async function Experience({
  locale,
}: {
  locale: Lang;
}) {
  const experiences = await getExperiences(locale);
  return (
    <section id="experience" className="w-full py-10 flex flex-col gap-4">
      <ExperienceClientComponent experiences={experiences} />
    </section>
  );
}