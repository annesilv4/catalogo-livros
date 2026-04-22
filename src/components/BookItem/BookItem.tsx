import { Link } from "react-router-dom";
import type { Book } from "../../types/Book";
import Style from "./BookItem.module.css";
import Logo from "../../../public/assets/logo-page.png";


interface BookItemProps {
    book: Book;
    onDelete: (id: string) => void;
}

export default function BookItem({ book, onDelete }: BookItemProps) {
    if (!book._id) return null;

    return (
        <div className={Style.bookItem}>
            <div className={Style.bookItemImage}>
                <img src={Logo} alt="imagem padrão do livro" />
            </div>
            <h3 className={Style.bookItemTitle}>{book.title}</h3>
            <p className={Style.bookItemAuthor}>{book.author}</p>
            <span className={Style.bookItemStatus}>{book.status === "read" ? "Lido" : "Não Lido"}</span>

            <div className={Style.bookItemActions}>
                <Link className={Style.bookItemEdit} to={`/books/${book._id}`}>
                    Editar Livro
                </Link>
                <button className={Style.bookItemDelete} onClick={() => onDelete(book._id!)}>
                    Deletar Livro
                </button>
            </div>
        </div>
    )
}