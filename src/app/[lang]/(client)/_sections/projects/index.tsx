import { ProjectCard } from "@/app/[lang]/_components/ProjectCard";
import { getProjects } from "../../_api/getProjects";

export default async function Projects({
  locale
}: {
  locale: 'en-US' | 'pt-BR';
}) {
  const projects = await getProjects(locale);

  return (
    <section className="py-10 flex flex-col gap-4">
      <h2 className="text-4xl font-extrabold">Projects</h2>
      <div className="grid grid-cols-3 gap-4 mt-4">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
      ))}
      </div>
    </section>
  );
}