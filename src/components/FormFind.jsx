export default function FormFind({ setActiveCategory, uniqueCategories, search, setSearch }) {
    return (
        <>
            <div className="container p-3">
                <h2 className="text-center text-first fs-1 fw-bold pt-4 RobotoCondensed pb-4">I nostri prodotti 🛒</h2>
                <hr />
                <form className="d-flex align-items-center py-4 " >
                    <label className="my-1 me-2 fw-bold RobotoCondensed" htmlFor="categorySelect">Category:</label>
                    <select className="custom-select my-1 mr-sm-2 p-2 me-2 rounded-pill RobotoCondensed" id="categorySelect" onChange={e => (setActiveCategory(e.target.value))} >
                        {uniqueCategories.map(cat => (
                            <option key={cat} value={cat} className="RobotoCondensed">{cat}</option>
                        ))}
                    </select>
                    <div className="input-group my-3">
                        <input type="text" className="form-control p-2 rounded-pill ps-3 RobotoCondensed" placeholder="Search for title..." value={search} onChange={e => setSearch(e.target.value)} />
                    </div>
                </form>
                <hr />
            </div>
        </>
    )
}