import { NavLink } from "react-router-dom";
import Logo from "./Logo";
import { useContext } from "react";
import BudgetContext from '../contexts/BudgetContext'

export default function Header() {

    // const { budgetMode, setBudgetMode } = useContext(BudgetContext)

    const { maxPrice, setMaxPrice } = useContext(BudgetContext);

    function handlePriceChange(e) {
        setMaxPrice(Number(e.target.value))
    }


    return (
        <nav className="navbar navbar-expand-lg bg-first">
            <div className="container-fluid container-lg py-2">
                <Logo isHeader={true} />
                <div className="navbar-links d-flex text-white fs-5 gap-4 fw-bold align-items-center">
                    <NavLink className="nav-link" to="/">Home</NavLink>
                    <NavLink className="nav-link" to="/contacts">Chi Siamo</NavLink>
                    <NavLink className="nav-link" to="/products">Prodotti</NavLink>
                    <NavLink className="nav-link" to="/faqs">Faqs</NavLink>
                    <input type="number" placeholder="Inserisci il prezzo massimo..." value={maxPrice === 0 ? '' : maxPrice} onChange={handlePriceChange} className="form-control form-control-sm" style={{ width: '155px' }}
                    />
                    {/* <button className={`btn py-2 ${budgetMode ? "btn-danger" : "btn-success"}`} onClick={() => setBudgetMode(!budgetMode)}>{budgetMode ? "Normal Mode" : "Budget Mode"}</button> */}
                </div>
            </div>
        </nav>
    )
}