import 'server-only'
 
const dictionaries = {
  'en-US': () => import('../../dictionaries/en-US.json').then((module) => module.default),
  'pt-BR': () => import('../../dictionaries/pt-BR.json').then((module) => module.default),
}
 
export const getDictionary = async (locale: 'en-US' | 'pt-BR') =>
  dictionaries[locale]()