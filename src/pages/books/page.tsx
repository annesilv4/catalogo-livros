import Header from "../../components/Header/Header";
import Style from "./AddBookPage.module.css";
import BookForm from "../../components/BookForm/BookForm";
import { Container } from "../../components/Container/Container";
import Footer from "../../components/Footer/Footer";
import { useBooks } from "../../hooks/useBooks";
import { useEffect } from "react";

export default function AddBookPage() {
    useEffect(() => {
        document.title = "Catálogo de Livros | Adicionar Livro";
    }, []);

    const { addBook } = useBooks();

    return (
        <div className="min-h-screen flex flex-col">
            <Header
                showNav={false}
            />

            <main className="bg-gray-300 min-h-[calc(100vh-72px)]">
                <Container className="bg-white p-10 h-230">
                    <div className={Style.container}>
                        <h2 className="text-2xl w-full font-bold text-gray-800 text-start pb-3 mb-6 border-b-2 border-yellow-500">
                            Adicionar Livro
                        </h2>
                        <BookForm onAdd={addBook} />
                    </div>
                </Container>
            </main>

            <Footer />
        </div>
    )
}