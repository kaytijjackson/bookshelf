export interface BookType {
    id: string;
    title: string;
    author: string;
    startDate?: string;
    page?: number;
}

export interface CompletedBookType extends BookType {
    endDate: string;
    rating: number;
};