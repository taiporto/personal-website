import { LuGithub, LuGlobe } from "react-icons/lu";
import { Project } from "@/app/types";
import Image from "next/image";
import Link from "next/link";

export const ProjectCard = ({ project }: { project: Project }) => {
  return (
    <div
      key={project.id}
      className="bg-white border-purple-800/50 border-solid border rounded-lg shadow-md flex flex-col gap-4 p-3 hover:shadow-lg transition-shadow duration-300 hover:border-purple-800 hover:cursor-pointer relative hover:underline"
    >
      <div>
        <Image
          src={project.coverImage}
          alt={project.title}
          width={465}
          height={192}
          className="w-full border border-gray-300 h-48 object-cover rounded-lg"
          loading="lazy"
        />
      </div>
      <div className="flex items-end justify-between">
        <div className="max-w-3/4">
          <h3 className="text-xl font-bold">
            <Link href={`/project/${project.id}`} className="hover:underline before:z-0 before:absolute before:w-full before:h-3/4 before:top-0 before:left-0" prefetch>
              {project.title}
            </Link>
          </h3>
        </div>
        <div className="flex gap-2 border-gray-300">
          {project.links?.map((link, index) => {
            const IconComponent = link.type === 'github' ? LuGithub : LuGlobe;
            return(
            <div
              key={index + link.type}
              className=""
            >
              <a href={link.url} target="_blank" rel="noopener noreferrer">
                <IconComponent
                  title={link.type === 'github' ? 'GitHub' : 'Website'}
                  className="text-purple-700 hover:text-purple-300 transition-all"
                  size={24}
                />
              </a>
            </div>
          )})}
        </div>
      </div>
    </div>
  );
};
