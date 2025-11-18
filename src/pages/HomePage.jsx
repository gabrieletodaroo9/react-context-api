import BannerUCL from "../components/BannerUCL";
import BestSeller from "../components/BestSeller";
import Jumbotron from "../components/Jumbotron";
import BlackFridayBanner from "../components/BlackFridayBanner";
import adsBanner1 from "../assets/ads-banner1.png"
import adsBanner2 from "../assets/ads-banner2.png"
import adsBanner4 from "../assets/ads-banner4.jpg"
import { Quantum } from 'ldrs/react'
import 'ldrs/react/Quantum.css'

export default function HomePage({ bestSellers }) {

    const isLoading = !bestSellers || bestSellers.length === 0

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
                <main className="bg-second">
                    <Jumbotron topShadow={false} />
                    <div className="d-none ads-banner4">
                        <img src={adsBanner4} alt="" />
                    </div>
                    <div className="row g-0">
                        <div className="ps-2 col-2 d-flex justify-content-center align-items-center stop">
                            <div className="ads-banner">
                                <img src={adsBanner1} alt="" />
                            </div>
                        </div>
                        <div className="col-8">
                            <BestSeller bestSellers={bestSellers} />
                        </div>
                        <div className="pe-2 col-2 d-flex justify-content-center align-items-center stop ">
                            <div className="ads-banner2">
                                <img src={adsBanner2} alt="" />
                            </div>
                        </div>
                    </div>
                    <BlackFridayBanner />
                    <BannerUCL />

                </main>
            )
            }

        </>
    )
}