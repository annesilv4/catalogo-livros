import { Container } from "../Container/Container";
import Style from "./Header.module.css";
import Logo from "../../../public/assets/logo-page.png"

export default function Header({ ShowSearch = true, showNav = true }: { ShowSearch?: boolean, showNav?: boolean }) {
    return (
        <header className={Style.header}>
            <Container>
                <div className={Style.headerInner}>
                    <div className={Style.headerLogo}>
                        <img src={Logo} className="w-10 h-10" alt="" />
                        <h1>My Library</h1>
                    </div>

                    {ShowSearch && (
                        <div className={Style.search}>
                            <input type="text" placeholder="Buscar livro..." />
                        </div>
                    )}

                    {showNav && (
                        <nav id={Style.nav}>
                            <a href="">Início</a>
                            <a href="">Catálogo</a>
                            <a href="">Favoritos</a>
                        </nav>
                    )}
                </div>
            </Container>
        </header>
    )
}