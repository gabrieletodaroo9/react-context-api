import BannerUCL from "../components/BannerUCL";
import Card from "../components/Card";
import FormFind from "../components/FormFind";
import { useContext } from "react";
import BudgetContext from '../contexts/BudgetContext'

export default function ProductsPage({ setActiveCategory, uniqueCategories, search, setSearch, filtered }) {

    // const { budgetMode } = useContext(BudgetContext)
    const { maxPrice } = useContext(BudgetContext)

    // const filteredDouble = budgetMode ? filtered.filter(obj => obj.price <= 30) : filtered;

    const filteredDouble = filtered.filter(obj => maxPrice === null || obj.price <= maxPrice)

    return (
        <>
            <main className="bg-second">
                <BannerUCL />
                <FormFind setActiveCategory={setActiveCategory} uniqueCategories={uniqueCategories} search={search} setSearch={setSearch} />

                <div className="container pt-4">
                    <div className="row g-5 pb-5">
                        {
                            filteredDouble.map(obj => (
                                <Card key={obj.id} obj={obj} />
                            ))
                        }
                    </div>
                </div>
            </main >
        </>
    )
}