import type { Book } from "../../types/Book";

interface BookListProps {

    books: Book[];
    loading: boolean;
    error: string | null;
    onDelete: (id: string) => void;
}

export default function BookList({ books, loading, error, onDelete }: BookListProps) {

    if (loading) {
        return <p>Loading...</p>
    }

    if (error) {
        return <p>Erro na listagem dos livros</p>
    }

    return (
        <div>
            <h1>📚 Catálogo de Livros</h1>

            {books.map((book) => (
                <div key={book._id}>
                    <p>{book.title}</p>
                    <p>{book.author}</p>
                    <span>{book.status}</span>

                    <button onClick={() => book._id && onDelete(book._id)}>
                        Remover Livro
                    </button>
                </div>
            ))}
        </div>
    )
}