import { contentfulClient } from "@/app/_lib/contentful"
import { Lang } from "@/app/types"

export const getExperiences = async (locale: Lang): Promise<any[]> => {
  const response = await contentfulClient.getEntries({
    content_type: 'experience',
  });

  return response.items.map(({ fields: experience, sys: { id } }) => ({
      id,
      role: experience.role[locale] || "",
      companyLogo: experience.companyLogo?.fields.file[locale]?.url || "",
      company: 
        experience.company[locale],
      startDate: experience.startDate || "",
      endDate: experience.endDate || "",
    }));
}  