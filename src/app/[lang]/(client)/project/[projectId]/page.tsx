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
    <div className="">
      <header className="flex gap-4 justify-between items-center">
        <h1 className="text-4xl font-extrabold grow">{project.title}</h1>
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