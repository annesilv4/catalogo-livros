import BookList from "../components/BookList/BookList";
import { Container } from "../components/Container/Container";
import Header from "../components/Header/Header";
import { useBooks } from "../hooks/useBooks";
import { useEffect } from "react";

export default function Home() {
    const { books, loading, error, removeBook } = useBooks();

    useEffect(() => {
        document.title = "Catálogo de Livros | Página Inicial";
    }, []);

    return (
        <>
            <Header />

            <main className="bg-gray-300 min-h-[calc(100vh-72px)]">
                <Container className="bg-white p-10 h-230">
                    <BookList
                        books={books}
                        loading={loading}
                        error={error}
                        onDelete={removeBook}
                    />
                </Container>
            </main>
        </>
    )
}