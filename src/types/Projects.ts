import { PortableTextBlock } from "sanity";

export type Project = {
  _id: string;
  _createdAd: Date;
  name: string;
  slug: string;
  image: string;
  url: string;
  content: PortableTextBlock[];
};
