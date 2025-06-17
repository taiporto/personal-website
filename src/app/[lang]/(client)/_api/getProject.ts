import { contentfulClient } from "@/app/_lib/contentful"
import { Link, Project, TypeProjectSkeleton } from "@/app/types"
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

export const getProjectById = async (projectId:string, locale: 'en-US' | 'pt-BR'): Promise<Project> => {
  const response = await contentfulClient.getEntry<TypeProjectSkeleton>(projectId);

  return {
    id: response.sys.id,
    title: response.fields.title[locale] || '',
    description: response.fields.description ? documentToReactComponents(response.fields.description[locale]) : undefined,
    coverImage: response.fields.coverImage['en-US'].fields.file.url || "",
    tags: response.fields.tags['en-US'].map(tag => ({
      label: tag,
      color: 'gray'
    })) || [],
    links: response.fields.links && response.fields.links !== null ? (response.fields.links['en-US'] as unknown as Link[]).map((link: Link) => ({
      type: link.type as 'github' | 'website',
      url: link.url || ''
    })) : []
  }
}