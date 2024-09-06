import { useState } from "react"
import IncomeCard from "./IncomeCard"
import BreakdownCard from "./BreakdownCard"
import RemainingCard from "./RemainingCard"
import Visuals from "./Visuals"

export default function Dashboard() {
    // State variables to store income and spending breakdown values
    const [income, setIncome] = useState('');
    const [breakdown, setBreakdown] = useState('');

    // Calculate remaining funds
    const remainingFunds = income - breakdown;

    return (
        <section className="flex flex-col lg:grid grid-cols-5 grid-rows-4 gap-4 pb-12">
            <IncomeCard income={income} setIncome={setIncome} />
            <BreakdownCard breakdown={breakdown} setBreakdown={setBreakdown} />
            <RemainingCard remainingFunds={remainingFunds} />
            <Visuals />
        </section>
    )
}