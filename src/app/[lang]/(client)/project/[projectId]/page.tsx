import { Lang } from "@/app/types";
import { getProjectById } from "../../_api/getProjectById";
import Image from "next/image";

export default async function ProjectPage({
  params
}: {
    params: Promise<{ projectId: string, lang: Lang }>
}) {
  const { projectId, lang } = await params;
  const project = await getProjectById(projectId, lang);
  return (
    <div
      className="rounded-lg bg-white p-10 w-full"
    >
      <header className="flex gap-4 justify-between items-center">
        <div className="flex flex-col gap-4">
          <h1 className="text-4xl font-extrabold grow">{project.title}</h1>
          <p className="text-lg text-gray-600">{project.summary}</p>
          <div className="flex flex-wrap gap-2 mb-4">
            {project.links.map((link) => {
              return (
                <a
                  key={link.url}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center px-4 py-2 text-sm font-medium text-white bg-purple-800 rounded-md hover:bg-purple-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2`}
                >
                  {link.type === "github" ? "GitHub" : "Website"}
                </a>
              )
            })}
          </div>
        </div>
        <div>
          <Image
            src={project.coverImage}
            alt={project.title}
            width={800}
            height={400}
            className="w-full border border-gray-300 h-48 object-cover rounded-lg"
            loading="lazy"
          />
        </div>
      </header>
      <main className="pt-10">
        <p className="text-lg">{project.description}</p>
      </main>
    </div>
  );
}