import { CompletedBookType } from "@book-data";
import { formatPageCountData } from "./PageCountPieChart";

const books: CompletedBookType[] = [
  {
    id: "1",
    title: "title1",
    author: "author1",
    genre: "Mystery",
    endDate: "2026-01-01",
    rating: 4,
    pageCount: 199,
  },
  {
    id: "2",
    title: "title2",
    author: "author2",
    genre: "Mystery",
    endDate: "2026-02-01",
    rating: 4,
    pageCount: 289,
  },
  {
    id: "3",
    title: "title1",
    author: "author1",
    genre: "Thriller",
    endDate: "2026-01-01",
    rating: 4,
    pageCount: 249,
  },
  {
    id: "4",
    title: "title1",
    author: "author1",
    genre: "Thriller",
    endDate: "2026-01-01",
    rating: 4,
    pageCount: 600,
  },
];

describe("formatPageCountData", () => {
  it("should formatPageCountData", () => {
    expect(formatPageCountData(books)).toEqual({
      "< 200": 1,
      "200-300": 2,
      "500+": 1,
    });
  });
});
