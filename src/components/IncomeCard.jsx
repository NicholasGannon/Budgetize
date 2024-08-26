export default function IncomeCard() {
    return(
        <div className="flex flex-col gap-4 outline outline-1 outline-gray-200 p-4 rounded font-Raleway" style={{gridArea: "1 / 1 / 2 / 3"}}>
            <h2 className="text-2xl font-medium">Income</h2>
            <p className="text-base font-light">In the field below, please enter your estimated total monthly income (in USD):</p>
            <input className="text-base indent-1 outline outline-1 outline-gray-300 rounded-sm" type="number" placeholder="Enter amount here"/>
        </div>
    )
}