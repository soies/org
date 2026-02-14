// 1. Comment out the broken import
// import { defineLive } from "next-sanity";

import { client } from './client'

// 2. Create a "Mock" fetcher that uses the working client instead
export const sanityFetch = async ({ query, params = {} }: any) => {
  return client.fetch(query, params);
};

// 3. Create a "Mock" component that renders nothing
export const SanityLive = () => null;