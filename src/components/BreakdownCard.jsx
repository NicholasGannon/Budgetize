export default function BreakdownCard({setSpending}) {
    const handleChange = (e) => {
        setSpending(Number(e.target.value));
    }

    return (
        <div className="flex flex-col gap-4 outline outline-1 outline-gray-200 p-4 rounded font-Raleway" style={{gridArea: "2 / 1 / 4 / 3"}}>
            <h2 className="text-2xl font-medium">Spending Breakdown</h2>
            <p className="text-base font-light">Add new categories for your monthly spending, and Budgetize will break down the amount relative to your monthly income.</p>
            <input
                className="text-base indent-1 outline outline-1 outline-gray-300 rounded-sm" 
                type="number" 
                placeholder="Enter amount here"
                onChange={handleChange}
            />
        </div>
    )
}