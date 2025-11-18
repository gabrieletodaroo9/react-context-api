import { Link } from "react-router-dom";
import Logo from "./Logo";

export default function Footer() {

    return (
        <>
            <footer className="bg-first">
                <div className="container">
                    <div className="row py-5 text-light fs-5">
                        <div className="col-12 col-md-4 ps-5">
                            <div className="bg-first container-footer-resp">
                                <h1 className="fw-bold mb-4 text-logo mt-3">Menu</h1>
                                <ul className="list-unstyled text-white">
                                    <li className="fw-bold fs-5 pb-2"><Link className="footer-link" to="/">Home</Link></li>
                                    <li className="fw-bold fs-5 pb-2"><Link className="footer-link" to="/contacts">Chi Siamo</Link></li>
                                    <li className="fw-bold fs-5 pb-2"><Link className="footer-link" to="/products">Prodotti</Link></li>
                                    <li className="fw-bold fs-5"><Link className="footer-link" to="/faqs">Faqs</Link></li>
                                </ul>


                            </div>
                        </div>
                        <div className="col-12 col-md-8 container-footer-resp">
                            <Logo isHeader={false} />
                            <p className="ps-4 fs-4 mt-4 fw-bold">Ti guidiamo attraverso la vasta selezione dei migliori prodotti sul mercato. Concentrati solo sul piacere dello shopping; al resto pensiamo noi.
                            </p>


                        </div>

                    </div>
                </div>
            </footer>
        </>
    )
}