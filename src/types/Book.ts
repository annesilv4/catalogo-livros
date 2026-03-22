export type BookStatus = "read" | "unread";

export interface Book {
    _id?: string | number;
    title: string;
    author: string;
    status: BookStatus;
}