import { useState, useEffect } from "react";
import { listBook, createBook, deleteBook } from "../services/api";
import type { Book } from "../types/Book";

export function useBooks() {
    const [books, setBooks] = useState<Book[]>([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const loadBooks = async () => {
        try {
            setLoading(true);
            const data = await listBook();
            setBooks(data);
        } catch (err) {
            setError(`Error [listing books]: ${err}`);
        } finally {
            setLoading(false);
        }
    }

    const addBook = async (book: Omit<Book, "_id">) => {
        try {
            setLoading(true);
            const data = await createBook(book);
            setBooks((prev) => [...prev, data]);
        } catch (error) {
            setError(`Error [creating book]: ${error}`);
        }
    }

    const removeBook = async (id: any) => {
        try {
            await deleteBook(id);
            setBooks((prev) => prev.filter((book) => book._id !== id));
        } catch (err) {
            setError(`Error [deleting book]: ${err}`);
        }
    }

    useEffect(() => {
        loadBooks();
    }, []);

    return {
        books,
        loading,
        error,
        addBook,
        removeBook,
    }
}