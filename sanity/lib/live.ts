// Temporarily disabled to fix Vercel build error 'getDraftId'
// import { defineLive } from "next-sanity";
import { client } from './client'

// We create a dummy sanityFetch that just uses the regular client
export const sanityFetch = async ({ query, params = {} }: any) => {
  return client.fetch(query, params);
};

// We create a dummy component so your layout doesn't crash
export const SanityLive = () => null;