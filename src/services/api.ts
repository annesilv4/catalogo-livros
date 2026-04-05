import axios from "axios";
import type { Book } from "../types/Book";

const API_URL = "https://crudcrud.com/api/95aace2898f843a38f471dd8ca60b928/books";

export const createBook = async (values: Book): Promise<Book> => {
    try {
        const response = await axios.post(API_URL, values);
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
        await axios.put(`${API_URL}/${id}`, data);
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