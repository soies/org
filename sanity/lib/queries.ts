import { defineQuery } from "next-sanity";

export const TEAMS_QUERY = defineQuery(`*[_type == "team"] | order(rank asc) {
  _id,
  name,
  position,
  description,
  rank,
  "photoUrl": photo.asset->url,
}`);

// Goal 2: Sort Magazines (Newest/Highest Issue at Top)
export const MAGAZINES_QUERY = defineQuery(`*[_type == "magazine"] | order(issueNumber desc) {
  _id,
  title,
  issueNumber,
  description,
  "cover": cover[0].asset->url,
  "resources": resources.asset->url,
}`);

export const JOURNAL_QUERY = defineQuery(`*[_type == "journal"] | order(issueNumber desc) {
  _id,
  title,
  issueNumber,
  description,
  "cover": cover[0].asset->url,
  "resources": resources.asset->url,
}`);

export const NOTICES_QUERY = defineQuery(`*[_type == "notice"] | order(_createdAt desc) {
  _id,
  title,
  description,
  category,
  "imageUrl": image.asset->url,
  "pdf": pdf.asset->url,
  "videoURL": video.url
}`);

export const ALUMNI_QUERY = ({ limit }: { limit?: number }) => {
  return defineQuery(`*[_type == "alumni"] | order(graduationYear desc)[0...${limit || 100}] {
    _id,
    name,
    graduationYear,
    major
  }`);
};

// Goal 3: Sort Events (Newest/Latest First)
export const EVENTS_QUERY = defineQuery(`*[_type == "event"] | order(eventDate desc) {
    _id,
    title,
    eventDate,
    "images": images[].asset->url,
}`);

export const HOME_PAGE_QUERY = defineQuery(`*[_type == "homePage"][0]{
  "heroImageUrl": heroImage.asset->url,
  aboutTitle,
  aboutText
}`);