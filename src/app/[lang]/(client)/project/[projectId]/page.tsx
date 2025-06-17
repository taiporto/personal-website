import { getProjectById } from "../../_api/getProject";

export default async function ProjectPage({
  params
}: {
  params: Promise<{ projectId: string, lang: string }>
}) {
  const { projectId, lang } = await params;
  const project = await getProjectById(projectId, lang);
  return (
    <div className="p-10 px-20">
      <h1 className="text-4xl font-extrabold">{project.title}</h1>
      <p className="text-lg">This is a placeholder for the project details.</p>
    </div>
  );
}