import { defineQuery } from "next-sanity";

export const TEAMS_QUERY = defineQuery(`*[_type == "team" ]{
  _id,
  name,
  position,
  description,
  "photoUrl": photo.asset->url,
}`);
