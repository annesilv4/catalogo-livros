import Style from "./BookForm.module.css";
import type { Book, BookStatus, NewBook } from "../../types/Book";
import { useState, useEffect } from "react";
import { getBook } from "../../services/api";

interface BookFormProps {
    onAdd?: (book: NewBook) => Promise<void>;
    onEdit?: (id: string, book: Book) => Promise<void>;
    bookId?: string;
}

export default function BookForm({ onAdd, onEdit, bookId }: BookFormProps) {
    const [author, setAuthor] = useState("");
    const [title, setTitle] = useState("");
    const [status, setStatus] = useState<BookStatus>("unread");
    const [formError, setFormError] = useState("");
    const [success, setSuccess] = useState(false);
    const [loading, setLoading] = useState(false);

    const isEdit = !!bookId;

    useEffect(() => {
        if (!bookId) return;

        const fetchBook = async () => {
            try {
                setLoading(true);
                const book = await getBook(bookId);
                setTitle(book.title);
                setAuthor(book.author);
                setStatus(book.status);
            } catch {
                setFormError("Erro ao buscar o livro. Tente novamente.");
            } finally {
                setLoading(false);
            }
        }

        fetchBook();
    }, [bookId])

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!author || !title) {
            setFormError("Preencha o título e o autor.");
            setSuccess(false);
            return;
        }

        try {
            setLoading(true);
            setFormError("");
            if (isEdit && onEdit) {
                await onEdit(bookId, { _id: bookId, title, author, status, createdAt: "", updatedAt: "" });
            } else if (onAdd) {
                await onAdd({ title, author, status });
                setAuthor("");
                setTitle("");
                setStatus("unread");
            }
            setSuccess(true);
            setTimeout(() => setSuccess(false), 3000);
        } catch {
            setFormError(isEdit ? "Erro ao editar o livro. Tente novamente." : "Erro ao adicionar o livro. Tente novamente.");
        } finally {
            setLoading(false);
        }
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
            {success && <span className={Style.success}>{isEdit ? "Livro editado com sucesso!" : "Livro adicionado com sucesso!"}</span>}

            <div className="flex justify-between">
                <button className={Style.cancelBtn} disabled={loading}>Cancelar</button>
                <button className={Style.submitBtn} type="submit" disabled={loading}>
                    {loading ? (isEdit ? "Salvando..." : "Adicionando...") : (isEdit ? "Salvar Alterações" : "Adicionar Livro")}
                </button>
            </div>
        </form>
    )
}