import { useState } from "react"
import IncomeCard from "./IncomeCard"
import BreakdownCard from "./BreakdownCard"
import RemainingCard from "./RemainingCard"
import Visuals from "./Visuals"

export default function Dashboard() {
    const [income, setIncome] = useState(0);
    const [spending, setSpending] = useState(0);
    const [categories, setCategories] = useState([]);

    // Calculate remaining amount
    const remainingAmount = income - spending;

    // Create chart data
    const chartData = {
        labels: categories.map(item => item.category),
        datasets: [
            {
                label: 'Spending by Category',
                data: categories.map(item => item.amount),
                backgroundColor: categories.map((_, index) => `hsl(${index * 360 / categories.length}, 70%, 70%)`),
                borderColor: '#fff',
                borderWidth: 1,
            },
        ],
    };

    return (
        <section className="flex flex-col lg:grid grid-cols-5 grid-rows-4 gap-4 pb-12">
            <IncomeCard setIncome={setIncome} />
            <BreakdownCard 
                setSpending={setSpending} 
                setCategories={setCategories}
            />
            <RemainingCard remainingAmount={remainingAmount} />
            <Visuals chartData={chartData} />
        </section>
    )
}