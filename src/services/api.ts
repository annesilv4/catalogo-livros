import axios from "axios";
import type { Book, NewBook } from "../types/Book";

const API_URL = "https://crudcrud.com/api/6c98f7882cfd4c84855b442168533bdc/books";

export const createBook = async (values: NewBook): Promise<Book> => {
    const timestamp = new Date().toISOString();
    const payload = {
        ...values,
        createdAt: timestamp,
        updatedAt: timestamp,
    };

    try {
        const response = await axios.post(API_URL, payload);
        return response.data;
    } catch (err) {
        console.error("Error [creating book]:", err);
        throw new Error("Internal Server Error");
    }
};

export const listBook = async (): Promise<Book[]> => {
    try {
        const response = await axios.get(API_URL);
        return response.data;
    } catch (err) {
        console.error("Error [listing books]:", err);
        throw new Error("Erro ao buscar livros");
    }
};

export const updateBook = async (id: string, values: Book): Promise<void> => {
    const { _id, ...data } = values;

    try {
        const currentBookResponse = await axios.get<Book>(`${API_URL}/${id}`);
        const currentBook = currentBookResponse.data;

        const payload = {
            ...data,
            updatedAt:
                currentBook.status !== values.status
                    ? new Date().toISOString()
                    : currentBook.updatedAt,
        };

        await axios.put(`${API_URL}/${id}`, payload);
    } catch (err) {
        console.error("Error [updating book]:", err);
        throw new Error("Erro ao atualizar o livro");
    }
};

export const deleteBook = async (id: string): Promise<void> => {
    try {
        await axios.delete(`${API_URL}/${id}`);
    } catch (err) {
        console.error("Error [deleting book]:", err);
        throw new Error("Erro ao excluir o livro");
    }
};