import { useState, useEffect } from "react";
import { listBook, createBook, deleteBook, updateBook } from "../services/api";
import type { Book, BookUpdate, NewBook } from "../types/Book";

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

    const addBook = async (book: NewBook): Promise<void> => {
        try {
            setLoading(true);
            const data = await createBook(book);
            setBooks((prev) => [...prev, data]);
        } catch (error) {
            setError(`Error [creating book]: ${error}`);
            throw error;
        } finally {
            setLoading(false);
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

    const editBook = async (id: string, values: BookUpdate) => {
        try {
            setLoading(true);
            await updateBook(id, values);
            setBooks((prev) =>
                prev.map((book) => (book._id === id ? { ...book, ...values } : book))
            );
        } catch (err) {
            setError(`Error [updating book]: ${err}`);
            throw err;
        } finally {
            setLoading(false);
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
        editBook,
        removeBook,
    }
}