export default function IncomeCard() {
    return(
        <div className="outline outline-1 outline-gray-200 p-4 rounded font-Raleway" style={{gridArea: "1 / 1 / 2 / 3"}}>
            <h2 className="text-2xl font-medium">Income</h2>
            <p className="text-base font-light">In the field below, please enter your estimated total monthly income (in USD):</p>
            <input className="text-4xl font-black text-gray-600 focus:outline-none focus:placeholder:text-gray-600 placeholder:text-gray-300" type="number" placeholder="$00,000,000.00" />
        </div>
    )
}