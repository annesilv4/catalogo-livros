export type BookStatus = "read" | "unread";

export interface Book {
    _id: string;
    title: string;
    author: string;
    status: BookStatus;
    createdAt: string;
    updatedAt: string;
}

export type NewBook = Pick<Book, "title" | "author" | "status">;