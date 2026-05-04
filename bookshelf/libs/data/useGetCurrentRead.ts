import data from "./db/currentBook.json";
import { BookType } from "./types";

export const useGetCurrentRead: () => BookType = () => {
  return data;
};
