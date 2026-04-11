import type { BookStatus, NewBook } from "../../types/Book";
import { useState } from "react";

interface BookFormProps {
    onAdd: (book: NewBook) => void;
}

export default function BookForm({ onAdd }: BookFormProps) {
    const [author, setAuthor] = useState("");
    const [title, setTitle] = useState("");
    const [status, setStatus] = useState<BookStatus>("unread");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        if (!author || !title) {
            return;
        }

        onAdd({ title, author, status });

        setAuthor("");
        setTitle("");
        setStatus("unread");
    }

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Título"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            />

            <input
                type="text"
                placeholder="Autor"
                value={author}
                onChange={(e) => setAuthor(e.target.value)}
            />

            <select value={status} onChange={(e) => setStatus(e.target.value as BookStatus)}>
                <option value="unread">Não Lido</option>
                <option value="read">Lido</option>
            </select>

            <button type="submit">Adicionar Livro</button>
        </form>
    )
}