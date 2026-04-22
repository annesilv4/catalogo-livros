import { Link } from "react-router-dom";
import { Container } from "../Container/Container";
import Style from "./Footer.module.css";

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className={Style.footer}>
            <Container>
                <div className={Style.footerInner}>
                    <p className={Style.copy}>My Library © {currentYear}</p>

                    <nav className={Style.nav} aria-label="Navegacao do rodape">
                        <Link to="/">Inicio</Link>
                        <Link to="/books">Adicionar livro</Link>
                    </nav>
                </div>
            </Container>
        </footer>
    )
}
