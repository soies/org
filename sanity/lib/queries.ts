// 1. We remove the defineQuery import entirely to bypass the broken next-sanity package
export const TEAMS_QUERY = `*[_type == "team"] | order(rank asc) {
  _id,
  name,
  position,
  description,
  rank,
  "photoUrl": photo.asset->url,
}`;

export const MAGAZINES_QUERY = `*[_type == "magazine"] {
  _id,
  title,
  issueNumber,
  description,
  "cover": cover[0].asset->url,
  "resources": resources.asset->url,
}`;

export const JOURNAL_QUERY = `*[_type == "journal"] {
  _id,
  title,
  issueNumber,
  description,
  "cover": cover[0].asset->url,
  "resources": resources.asset->url,
}`;

export const NOTICES_QUERY = `*[_type == "notice"] | order(_createdAt desc) {
  _id,
  title,
  description,
  category,
  "imageUrl": image.asset->url,
  "pdf": pdf.asset->url,
  "videoURL": video.url
}`;

export const ALUMNI_QUERY = ({ limit }: { limit?: number }) => {
  return `*[_type == "alumni"] | order(graduationYear desc)[0...${limit || 100}] {
    _id,
    name,
    graduationYear,
    major
  }`;
};

export const EVENTS_QUERY = `*[_type == "event"] | order(eventDate desc) {
    _id,
    title,
    eventDate,
    "images": images[].asset->url,
}`;

export const HOME_PAGE_QUERY = `*[_type == "homePage"][0]{
  "heroImageUrl": heroImage.asset->url,
  aboutTitle,
  aboutText
}`;