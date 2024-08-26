import { useState } from "react"
import IncomeCard from "./IncomeCard"
import BreakdownCard from "./BreakdownCard"
import RemainingCard from "./RemainingCard"
import Visuals from "./Visuals"

export default function Dashboard() {
    const [income, setIncome] = useState(0);
    const [spending, setSpending] = useState(0);

    // Calculate remaining amount
    const remainingAmount = income - spending;

    return (
        <section className="flex flex-col lg:grid grid-cols-5 grid-rows-4 gap-4 pb-12">
            <IncomeCard setIncome={setIncome} />
            <BreakdownCard setSpending={setSpending} />
            <RemainingCard remainingAmount={remainingAmount} />
            <Visuals />
        </section>
    )
}