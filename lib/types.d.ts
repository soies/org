export interface TeamMember {
  _id: string;
  name: string;
  position: string;
  photoUrl: string;
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
