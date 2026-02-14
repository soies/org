// @ts-ignore
import imageUrlBuilder from '@sanity/image-url'
import { dataset, projectId } from '../env'

// We use a fallback to empty strings to prevent the builder from crashing during build
const builder = imageUrlBuilder({ 
  projectId: projectId || '', 
  dataset: dataset || '' 
})

export const urlFor = (source: any) => {
  return builder.image(source)
}