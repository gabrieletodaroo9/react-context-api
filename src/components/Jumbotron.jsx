import { Link } from "react-router-dom";

export default function Jumbotron({ topShadow }) {


    return (
        <div className={"jumbotron p-5 bg-light rounded-3"} style={topShadow ? { boxShadow: '0 -10px 10px 13px rgba(0, 0, 0, 0.05)' } : { boxShadow: '0 10px 10px 13px rgba(0, 0, 0, 0.05)' }
        }>
            <div className="container-fluid py-2 flex-column d-flex justify-content-around align-items-center text-first">
                <h1 className="display-5 fw-bold text-center league-gothic">La Selezione Premium che Stavi Cercando</h1>
                <p className="col-md-8 fs-2 text-center mt-5 league-gothic">
                    Dimentica il superfluo. Su Amazonado, ogni articolo è scelto per la sua eccellenza, durabilità e design.
                </p>
                <button className="btn btn-dark bg-first btn-lg px-4 py-3 mt-5 rounded-pill league-gothic fw-bold" type="button">
                    <Link className="nav-link" to="/products">Scopri i prodotti</Link>
                </button>
            </div>
        </div >
    )
}