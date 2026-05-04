import { formatDate as format } from "date-fns";

export const formatDate = (date: string) => {
    return format(date, 'MMM d, yyyy');
};