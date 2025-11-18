import Card from "../components/Card";

export default function BestSeller({ bestSellers }) {

    return (
        <>
            <div className="container  py-5">
                <h2 className="text-center text-first fs-1 fw-bold pb-4">I nostri BestSeller <span><i className="bi bi-fire text-danger"></i></span></h2>
                <hr />
                <div className="row p-4 mb-4 g-4 pt-5">
                    {
                        bestSellers.map(obj =>
                            <Card key={obj.id} obj={obj} />

                        )
                    }
                </div>
            </div>
        </>
    )
}   