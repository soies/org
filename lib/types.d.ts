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

type TJournal = {
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