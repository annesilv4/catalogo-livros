import { Link } from "react-router-dom";
import type { Book } from "../../types/Book";
import BookItem from "../BookItem/BookItem";
import Style from "./BookList.module.css";

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
        return <p className={Style.error}>Erro na listagem dos livros</p>
    }

    return (
        <div className="flex flex-col">
            <h1 className="text-center font-medium text-2xl border-b-2 border-yellow-500">Seu catálogo de livro(s)</h1>

            <div className="w-full h-16 p-2.5 flex justify-end">
                <Link to="/books" className={Style.addBookButton}>Adicionar Livro</Link>
            </div>

            <div className={Style.bookList}>
                {books.map((book) => (
                    <BookItem
                        key={book._id}
                        book={book}
                        onDelete={onDelete}
                    />
                ))}
            </div>
        </div>
    )
}