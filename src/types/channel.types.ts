export type ChannelCategory =
  | "News" | "Sports" | "Entertainment" | "Movies" | "Music" | "Kids" | "Religious";

export const CATEGORIES: ChannelCategory[] = [
  "News", "Sports", "Entertainment", "Movies", "Music", "Kids", "Religious",
];

export interface ChannelData {
  name: string;
  category: ChannelCategory;
  image: string | null;
  channelLink: string;
}

export type Channel = ChannelData & { id: string }; 