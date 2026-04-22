import { Container } from "../Container/Container";
import Style from "./Header.module.css";
import Logo from "../../../public/assets/logo-page.png"
import { Link } from "react-router-dom";

export default function Header({ showNav = true }: { showNav?: boolean }) {
    return (
        <header className={Style.header}>
            <Container>
                <div className={Style.headerInner}>
                    <div className={Style.headerLogo}>
                        <img src={Logo} className="w-10 h-10" alt="" />
                        <h1>My Library</h1>
                    </div>

                    {showNav && (
                        <nav id={Style.nav}>
                            <Link to="/">Início</Link>
                        </nav>
                    )}
                </div>
            </Container>
        </header>
    )
}