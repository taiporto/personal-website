import { contentfulClient } from "@/app/_lib/contentful"
import { Lang } from "@/app/types"

type Experience = {
  id: string;
  role: string;
  companyLogo: string;
  companyName: string;
};

export const getExperiences = async (locale: Lang): Promise<Experience[]> => {
  const response = await contentfulClient.getEntries({
    content_type: "experience",
  });

  return response.items.map(({ fields: experience, sys: { id } }) => ({
    id,
    role: (experience.role[locale] as string) || "",
    companyLogo:
      // @ts-expect-error lib type is wrong
      "https:" + experience.companyLogo["en-US"]!.fields.file["en-US"].url,
    companyName: (experience.company[locale] as string) || "",
  }));
};  