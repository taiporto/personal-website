import { LuGithub, LuGlobe } from "react-icons/lu";
import Image from "next/image";
import Link from "next/link";
import { Project, Tag } from "../../(client)/_sections/projects/types";
import { motion } from "motion/react";

export const ProjectCard = ({ project }: { project: Project }) => {
  return (
    <motion.div
      whileHover={{
        rotate: 1,
      }}
      transition={{
        duration: 0.05,
      }}
      layout
      key={project.id}
      className="bg-white p-2 border-purple-300/30 border-solid border rounded-lg shadow-md flex flex-col gap-3 pb-3 hover:shadow-lg transition-all duration-300 hover:border-purple-800/50 hover:border-[1.5px] hover:cursor-pointer relative group"
    >
      <div>
        <Image
          src={project.coverImage}
          alt=""
          width={465}
          height={192}
          className="w-full h-38 border border-gray-200 object-cover rounded-lg"
          loading="lazy"
        />
      </div>
      <div className="flex gap-1 px-3 pt-1 flex-wrap">
        {project.tags?.map((tag: Tag) => (
          <span
            key={tag.label}
            className={`inline-block px-2 py-0.5 text-[12px] font-semibold rounded-full bg-gray-500 text-white text-shadow-xs group-hover:bg-purple-800/90 transition-all`}
          >
            {tag.label}
          </span>
        ))}
      </div>
      <div className="flex gap-2 px-3 grow justify-between items-center">
        <div className="max-w-3/4">
          <h3 className="text-lg font-medium truncate text-ellipsis" title={project.title}>
            <Link href={`/project/${project.id}`} className="hover:underline before:z-0 before:absolute before:w-full before:h-5/6 before:top-0 before:left-0" prefetch>
              {project.title}
            </Link>
          </h3>
        </div>
        <div className="flex gap-2 border-gray-300">
          {project.links?.map((link, index) => {
            const IconComponent = link.type === 'github' ? LuGithub : LuGlobe;
            return (
              <div
                key={index + link.type}
                className=""
              >
                <a href={link.url} target="_blank" rel="noopener noreferrer">
                  <IconComponent
                    title={link.type === 'github' ? 'GitHub' : 'Website'}
                    className="text-purple-700 hover:text-purple-400 transition-all"
                    size={20}
                  />
                </a>
              </div>
            )
          })}
        </div>
      </div>

    </motion.div>
  );
};
