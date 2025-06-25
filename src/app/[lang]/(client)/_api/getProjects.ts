import { contentfulClient } from "@/app/_lib/contentful"
import { Lang } from "@/app/types";
import {
  Link,
  Project,
  TypeProjectSkeleton,
} from "../_sections/projects/types";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

export const getProjects = async (locale: Lang): Promise<Project[]> => {
  const response = await contentfulClient.getEntries<TypeProjectSkeleton>({
    content_type: "project",
  });

  return response.items.map(({ fields: project, sys: { id } }) => ({
    id,
    title: project.title[locale] || "",
    description: project.description
      ? // @ts-expect-error contentful type is wrong
        documentToReactComponents(project.description[locale])
      : "",
    coverImage:
      // @ts-expect-error contentful type is wrong
      "https:" + project.coverImage["en-US"]!.fields.file["en-US"].url || "",
    tags: project.tags
      ? project.tags["en-US"]!.map((tag) => ({
          label: tag,
          color: "grey",
        }))
      : [],
    links:
      project.links && project.links !== null
        ? (project.links["en-US"] as unknown as Link[]).sort((a) =>
            a.type === "github" ? -1 : 1
          )
        : [],
  }));
};