export type GenreType = 'Mystery' | 'Thriller' | 'Fantasy'; 

export interface BookType {
    id: string;
    title: string;
    author: string;
    // TODO: Generate GenreType from graphql when implemented
    genre: string;
    // TODO: return as Date from graphql when implemented
    startDate?: string;
    currentPage?: number;
    pageCount: number;
}

export interface CompletedBookType extends BookType {
    // TODO: return as Date from graphql when implemented
    endDate: string;
    rating: number;
};