import Header from "../../../components/Header/Header";
import Style from './EditBookPage.module.css';
import BookForm from "../../../components/BookForm/BookForm";
import { Container } from "../../../components/Container/Container";
import Footer from "../../../components/Footer/Footer";
import { useBooks } from "../../../hooks/useBooks";
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

export default function EditBookPage() {
    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        document.title = "Catálogo de Livros | Editar Livro";
    }, []);

    useEffect(() => {
        if (!id) {
            navigate("/");
        }
    }, [id, navigate]);

    const { editBook } = useBooks();

    if (!id) {
        return null;
    }

    return (
        <div>
            <Header
                ShowSearch={false}
                showNav={false}
            />

            <main className="bg-gray-300 min-h-[calc(100vh-72px)]">
                <Container className="bg-white p-10 h-230">
                    <div className={Style.container}>
                        <h2 className="text-2xl w-full font-bold text-gray-800 text-start pb-3 mb-6 border-b-2 border-yellow-500">
                            Editar Livro
                        </h2>
                        <BookForm onEdit={editBook} bookId={id} />
                    </div>
                </Container>
            </main>

            <Footer />
        </div>
    )
}