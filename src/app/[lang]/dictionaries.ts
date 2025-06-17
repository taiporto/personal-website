import 'server-only'
import { Lang } from "../types";
 
const dictionaries = {
  'en-US': () => import('../../dictionaries/en-US.json').then((module) => module.default),
  'pt-BR': () => import('../../dictionaries/pt-BR.json').then((module) => module.default),
}
 
export const getDictionary = async (locale: Lang) => dictionaries[locale]();