export interface TeamMember {
  _id: string;
  name: string;
  position: string;
  photoUrl: string;
  rank: number;
  description?: string;
}

export type Magazine = {
  _id: string;
  title: string;
  issueNumber: string;
  description?: string;
  cover: string;
  resources: string;
};

export type TJournal = {
  _id: string;
  title: string;
  issueNumber: string;
  description?: string;
  cover: string;
  resources: string;
};

export type TNotice = {
  _id: string;
  title: string;
  description?: string;
  pdf?: string;
  imageUrl?: string;
  link?: string;
};

export type TEvent = {
  _id: string;
  eventDate: string;
  title: string; // Event title
  description: string; // Short description
  content?: Array<TContentBlock | TEventImage>; // Array of rich text or images
  images?: string[]; // Array of exactly 4 preview images
  cta?: string; // Optional call-to-action URL
  slug: {
    _type: "slug";
    current: string; // Slug string
  };
};

// Rich text block content
export type TContentBlock = {
  _type: "block";
  children: Array<{
    _type: string;
    text: string;
    marks?: string[];
  }>;
  style?: string; // E.g., "normal", "h1", "h2"
  markDefs?: Array<{ _type: string; [key: string] }>;
};

// Image type
export type TEventImage = {
  _type: "image";
  asset: {
    _ref: string;
    _type: "reference";
  };
  caption?: string; // Optional caption for the image
};
