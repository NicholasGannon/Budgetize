export default function RemainingCard() {
    return (
        <div className="outline outline-1 outline-gray-200 p-4 rounded font-Raleway" style={{gridArea: "4 / 1 / 5 / 3"}}>
            <h2 className="text-2xl font-medium">Remaining</h2>
            <p className="text-base font-light">The number shown below is the USD amount of leftover funds you have based on your spending:</p>
            <h3 className="text-4xl font-black">$00,000,000.00</h3>
        </div>
    )
}