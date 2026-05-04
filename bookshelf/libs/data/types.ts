export type GenreType = 'Mystery' | 'Thriller' | 'Fantasy'; 

export interface BookType {
    id: string;
    title: string;
    author: string;
    genre: GenreType;
    startDate?: string;
    page?: number;
}

export interface CompletedBookType extends BookType {
    endDate: string;
    rating: number;
};