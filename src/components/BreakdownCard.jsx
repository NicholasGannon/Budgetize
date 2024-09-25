export default function BreakdownCard({ breakdown, setBreakdown }) {
    // Update the spending breakdown state in Dashboard.jsx when the input value changes
    const handleInputChange = (event) => {
        setBreakdown(event.target.value);
    };

    return (
        <div className="flex flex-col gap-4 outline outline-1 outline-gray-300 p-4 rounded font-Raleway bg-white" style={{ gridArea: "2 / 1 / 4 / 3" }}>
            <h2 className="text-2xl font-medium">Spending Breakdown</h2>
            <p className="text-base font-light">Add new categories for your monthly spending:</p>
            <input
                className="text-base indent-1 outline outline-1 outline-gray-300 rounded-sm focus:outline-gray-400"
                type="number"
                inputMode="numeric"
                placeholder="Enter amount here"
                value={breakdown}
                onChange={handleInputChange}
            />
        </div>
    );
}
