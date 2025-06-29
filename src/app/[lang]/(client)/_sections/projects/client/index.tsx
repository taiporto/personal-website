'use client';

import { useTranslation } from "@/app/[lang]/_context/translation"
import { Project } from "../types";
import { ProjectCard } from "@/app/[lang]/_components/ProjectCard";
import { Title } from "@/app/[lang]/_components/Title";

export const ProjectsClientComponent = ({
  projects
}: {
  projects: Project[];
}) => {
  const { t } = useTranslation();
  return (
    <>
      <Title size="4xl" Tag="h2">
        {t('home.projects._title')}
      </Title>
      <div className="flex flex-col md:grid md:grid-cols-3 gap-6 mt-4">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
      ))}
      </div>
    </>
  ) 
}