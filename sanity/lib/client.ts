import { createClient } from 'next-sanity'
import { apiVersion, dataset, projectId } from '../env'

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: true, 
  // Stega must be inside these curly braces
  stega: {
    enabled: false, 
  },
})
