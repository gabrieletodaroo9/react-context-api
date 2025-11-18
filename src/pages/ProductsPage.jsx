import BannerUCL from "../components/BannerUCL";
import Card from "../components/Card";
import FormFind from "../components/FormFind";

export default function ProductsPage({ setActiveCategory, uniqueCategories, search, setSearch, filtered }) {


    return (
        <>
            <main className="bg-second">
                <BannerUCL />
                <FormFind setActiveCategory={setActiveCategory} uniqueCategories={uniqueCategories} search={search} setSearch={setSearch} />

                <div className="container pt-4">
                    <div className="row g-5 pb-5">
                        {
                            filtered.map(obj => (
                                <Card key={obj.id} obj={obj} />
                            ))
                        }
                    </div>
                </div>
            </main >
        </>
    )
}