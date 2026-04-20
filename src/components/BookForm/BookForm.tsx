import Style from "./BookForm.module.css";
import type { BookStatus, NewBook } from "../../types/Book";
import { useState } from "react";

interface BookFormProps {
    onAdd: (book: NewBook) => void;
}

export default function BookForm({ onAdd }: BookFormProps) {
    const [author, setAuthor] = useState("");
    const [title, setTitle] = useState("");
    const [status, setStatus] = useState<BookStatus>("unread");
    const [formError, setFormError] = useState("");
    const [success, setSuccess] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        if (!author || !title) {
            setFormError("Preencha o título e o autor.");
            setSuccess(false);
            return;
        }

        onAdd({ title, author, status });

        setAuthor("");
        setTitle("");
        setStatus("unread");
        setFormError("");
        setSuccess(true);
        setTimeout(() => setSuccess(false), 3000);
    }

    return (
        <form className={Style.form} onSubmit={handleSubmit}>
            <div className={Style.field}>
                <label htmlFor="title">Título</label>
                <input
                    id="title"
                    type="text"
                    placeholder="Ex: Dom Casmurro"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
            </div>

            <div className={Style.field}>
                <label htmlFor="author">Autor</label>
                <input
                    id="author"
                    type="text"
                    placeholder="Ex: Machado de Assis"
                    value={author}
                    onChange={(e) => setAuthor(e.target.value)}
                />
            </div>

            <div className={Style.field}>
                <label htmlFor="status">Status</label>
                <select
                    id="status"
                    value={status}
                    onChange={(e) => setStatus(e.target.value as BookStatus)}
                >
                    <option value="unread">Não Lido</option>
                    <option value="read">Lido</option>
                </select>
            </div>

            {formError && <span className={Style.error}>{formError}</span>}
            {success && <span className={Style.success}>Livro adicionado com sucesso!</span>}

            <div className="flex justify-between">
                <button className={Style.cancelBtn}>Cancelar</button>
                <button className={Style.submitBtn} type="submit">Adicionar Livro</button>
            </div>
        </form>
    )
}