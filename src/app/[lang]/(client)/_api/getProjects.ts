import { contentfulClient } from "@/app/_lib/contentful"
import { Link, Project, TypeProjectSkeleton } from "@/app/types"
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

export const getProjects = async (locale: 'en-US' | 'pt-BR'): Promise<Project[]> => {
  const response = await contentfulClient.getEntries<TypeProjectSkeleton>({
    content_type: 'project'
  });

  return response.items.map(({ fields: project, sys: { id } }) => ({
    id,
    title: project.title[locale] || "",
    description: documentToReactComponents(project.description[locale] as unknown as Document),
    coverImage: 'https:'+project.coverImage['en-US']!.fields.file['en-US'].url || "",
    tags: project.tags ? project.tags['en-US']!.map(tag => ({
      label: tag,
      color: 'gray'
    })) : [],
    links: project.links && project.links !== null ? (project.links['en-US'] as unknown as Link[]).map((link: Link) => ({
      type: link.type as 'github' | 'website',
      url: link.url || ''
    })) : []
  }));
}