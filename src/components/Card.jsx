import { Link } from "react-router-dom";

export default function Card({ obj }) {

    return (
        <Link to={`/products/${obj.id}`} className="col-12 col-lg-6 col-xxl-3">
            <div className="card h-100 text-first rounded-card">
                <div className="img-container p-3 position-relative">
                    <img src={obj.image} className="card-img-top" alt="..." />
                    <span className="position-absolute price card-text fw-bold text-dark fs-4 bg-second px-3 py-2 rounded-pill RobotoCondensed">{obj.price} €</span>
                </div>
                <div className="card-body px-3 bg-third px-4">
                    <span>{obj.rating.rate}</span>
                    <h4 className="card-title text-first RobotoCondensed">{obj.title}</h4>
                    <hr />
                    <p className="card-text py-2 fs-5">{obj.description} </p>
                </div>
            </div>
        </Link>
    )
}