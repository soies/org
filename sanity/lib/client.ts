import { createClient } from 'next-sanity'
import { apiVersion, dataset, projectId } from '../env'

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: true,
  // This MUST be inside the curly braces of createClient
  stega: {
    enabled: false, 
  },
})