import data from "./db/currentBook.json";
import { BookType } from "./types";

export const useCurrentRead: () => BookType = () => {
  return data;
};
