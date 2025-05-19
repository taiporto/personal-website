import { useTranslation } from "@/app/[lang]/_context/translation";
import { PROJECTS } from "./constants";

export const Projects = () => {
  const { t } = useTranslation();
  return (
    <section className="p-10 px-20">
      <h2 className="text-4xl font-extrabold">Projects</h2>
      <p className="text-lg">Here are some of my projects</p>
      <div className="grid grid-cols-3 gap-4 mt-4">
      {PROJECTS.map((project) => (
        <div key={project.id} className="bg-white border-purple-800 border-solid border rounded-lg shadow-sm flex flex-col">
          <div className='p-4 grow'>
            <h3 className="text-xl font-bold">{t(project.title)}</h3>
            <p>{t(project.description)}</p>
          </div>
          <div className="flex gap-2 border-t border-gray-300">
            {project.links.map((link, index) => (
              <div key={index} className="border-r border-gray-300 p-2 flex justify-center align-middle grow">
                <a href={link.url} className="text-blue-500">
                  {link.type[0].toUpperCase() + link.type.slice(1)}
                </a>
              </div>
            ))}
            </div>
        </div>
      ))}
      </div>
    </section>
  );
}