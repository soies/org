import { defineQuery } from "next-sanity";

export const TEAMS_QUERY = defineQuery(`*[_type == "team" ]{
  _id,
  name,
  position,
  description,
  "photoUrl": photo.asset->url,
}`);

export const MAGAZINES_QUERY = defineQuery(`*[_type == "magazine" ]{
  _id,
  title,
  issueNumber,
  description,
  "cover": cover[0].asset->url,
  "resources": resources.asset->url,
}`);

export const JOURNAL_QUERY = defineQuery(`*[_type == "journal" ]{
  _id,
  title,
  issueNumber,
  description,
  "cover": cover[0].asset->url,
  "resources": resources.asset->url,
}`);

export const ALUMNI_QUERY = ({ limit }: { limit?: number }) => {
  defineQuery(`*[_type == "alumni"] | order(graduationYear asc)[0...${limit}] {
  name,
  graduationYear,
  major
}
`);
};