import axios from "axios"
import { useEffect, useState } from "react"
import { Link, useNavigate, useParams } from "react-router-dom"
import { Quantum } from 'ldrs/react'



export default function SingleProductPage() {


    const [currentProduct, setCurrentProduct] = useState({})
    const { id } = useParams()
    const navigate = useNavigate()
    const [isLoading, setIsLoading] = useState(true)
    const currentId = Number(id)

    useEffect(() => {

        axios(`https://fakestoreapi.com/products/${id}`)
            .then(res => {
                if (currentId > 20 || currentId < 1) {
                    navigate('/error')
                    return;
                }
                setCurrentProduct(res.data)
                setIsLoading(false)

            })
            .catch(err => {
                console.log(err);

                navigate('/error')
            }
            )
    }, [currentId, id, navigate])
    return (
        <>
            {isLoading ? (
                <div className="d-flex justify-content-center align-items-center vh-100">
                    <div className="text-dark d-flex flex-column justify-content-center align-items-center">
                        <Quantum size="45" speed="1.75" color="black" />
                        <h1 className="RobotoCondensed fw-1">Loading...</h1>
                    </div>
                </div>
            ) : (
                <main className="bg-img">
                    <div className="container bg-white-transp py-5">
                        <div className="row g-5 py-5">
                            <div className="col-1 d-flex align-items-center">
                                <button className={`btn border-0 h-100 ${currentId === 1 && "d-none"}`} onClick={() => { currentId > 1 && navigate(`/products/${currentId - 1}`) }}>
                                    <i className="bi bi-arrow-left fs-2"></i>
                                </button>
                            </div>
                            <div className="col-10">
                                <div className="row g-5 py-5">
                                    <div className="col-12 col-lg-6 d-flex justify-content-center align-items-center p-5">
                                        <img className="w-100 img-single-product" src={currentProduct.image} alt="" />
                                    </div>
                                    <div className="col-12 col-lg-6 p-5 d-flex flex-column align-item-start justify-content-between">
                                        <span className="fs-1 fw-bold">{currentProduct.price} €</span>
                                        <h1>{currentProduct.title}</h1>
                                        <hr />
                                        <div className="d-flex justify-content-between align-items-center">
                                            <span className="fs-4 fw-bold">{currentProduct.category}</span>
                                            <div className="me-2 ">
                                                <span className=" fw-bold bg-success text-white py-2 px-3 rounded-3 fs-4 me-3">{currentProduct.rating.rate}<i className="bi bi-star-fill text-white ps-2 fs-4 "></i> </span>

                                            </div>
                                        </div>
                                        <hr />
                                        <span className="fs-5 fw-bold">{currentProduct.description}</span>
                                        <hr />
                                        <span className="pb-5">Quantità residua:{currentProduct.rating.count}</span>
                                        <button className="btn btn-success py-2 fw-bold">Aggiungi al carrello</button>
                                        <Link to='/products' className="btn btn-dark mt-2 py-2 fw-bold">Torna alla sezione prodotti</Link>
                                    </div>
                                </div>
                            </div>
                            <div className="col-1 d-flex align-items-center">
                                <button className={`btn border-0 h-100 ${currentId === 20 && "d-none"}`} onClick={() => { currentId < 20 && navigate(`/products/${currentId + 1}`) }}>
                                    <i className="bi bi-arrow-right fs-2"></i>
                                </button>
                            </div>
                        </div>
                    </div>
                </main>
            )
            }
        </>
    )
}