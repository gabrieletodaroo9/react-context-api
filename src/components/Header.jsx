import { NavLink } from "react-router-dom";
import Logo from "./Logo";

export default function Header() {

    return (
        <nav className="navbar navbar-expand-lg bg-first">
            <div className="container-fluid container-lg py-2">
                <Logo isHeader={true} />
                <div className="navbar-links d-flex text-white fs-5 gap-4 fw-bold">
                    <NavLink className="nav-link" to="/">Home</NavLink>
                    <NavLink className="nav-link" to="/contacts">Chi Siamo</NavLink>
                    <NavLink className="nav-link" to="/products">Prodotti</NavLink>
                    <NavLink className="nav-link" to="/faqs">Faqs</NavLink>
                </div>
            </div>
        </nav>
    )
}