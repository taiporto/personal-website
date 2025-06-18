import { ProjectCard } from "@/app/[lang]/_components/ProjectCard";
import { getProjects } from "../../_api/getProjects";
import { Lang } from "@/app/types";
import { ProjectsClientComponent } from "./client";

export default async function Projects({
  locale,
}: {
    locale: Lang;
}) {
  const projects = await getProjects(locale);

  return (
    <section id="projects" className="py-10 flex flex-col gap-4">
      <ProjectsClientComponent projects={projects} />
    </section>
  );
}