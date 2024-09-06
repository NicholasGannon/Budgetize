export default function RemainingCard({ remainingFunds }) {
    return (
        <div className="outline outline-1 outline-gray-200 p-4 rounded font-Raleway" style={{gridArea: "4 / 1 / 5 / 3"}}>
            <h2 className="text-2xl font-medium">Remaining</h2>
            <p className="text-base font-light">The number shown below is the USD amount of leftover funds you have based on your spending:</p>
            {/* The "toFixed(2)" displays remaining funds with 2 decimal places */}
            <h3 className="text-4xl font-black">${remainingFunds.toFixed(2)}</h3>
        </div>
    )
}