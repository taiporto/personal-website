'use client';

import { useTranslation } from "@/app/[lang]/_context/translation"
import { Project } from "../types";
import { ProjectCard } from "@/app/[lang]/_components/ProjectCard";

export const ProjectsClientComponent = ({
  projects
}: {
  projects: Project[];
}) => {
  const { t } = useTranslation();
  return (
    <>
      <div className="bg-gradient-to-r from-purple-900 to-purple-800 bg-clip-text text-transparent">
      <h2 className="text-4xl font-extrabold">{t('home.projects._title')}</h2>
    </div>
      <div className="grid grid-cols-3 gap-6 mt-4">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
      ))}
      </div>
    </>
  ) 
}