import { client } from './client'

export const sanityFetch = async ({ query, params = {} }: any) => {
  return client.fetch(query, params);
};

export const SanityLive = () => null;