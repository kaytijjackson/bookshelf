import { CompletedBookType } from "@book-data";
import { formatGenreData } from "./GenrePieChart";

const books: CompletedBookType[] = [{
    id: '1',
    title: 'title1',
    author: 'author1',
    genre: 'Mystery',
    endDate: '2026-01-01',
    rating: 4,
    pageCount: 300,
}, {
    id: '2',
    title: 'title2',
    author: 'author2',
    genre: 'Mystery',
    endDate: '2026-02-01',
    rating: 4,
    pageCount: 300,
},{
    id: '1',
    title: 'title1',
    author: 'author1',
    genre: 'Thriller',
    endDate: '2026-01-01',
    rating: 4,
    pageCount: 300,
}];

describe('formatGenreData', () => {
    it('should formatGenreData', () => {
        expect(formatGenreData(books)).toEqual({ 'Thriller': 1, 'Mystery': 2 });
    });
});