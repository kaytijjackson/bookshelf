import data from "./db/books.json";
import { CompletedBookType } from "./types";

// TODO: Fetch book data from db with graphql query and store data with react query
export const useReadingHistory: () => CompletedBookType[] = () => {
  return data.books;
};
