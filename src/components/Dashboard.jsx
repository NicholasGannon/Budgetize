import IncomeCard from "./IncomeCard"
import BreakdownCard from "./BreakdownCard"
import RemainingCard from "./RemainingCard"
import Visuals from "./Visuals"

export default function Dashboard() {
    return (
        <section className="flex flex-col lg:grid grid-cols-5 grid-rows-4 gap-4">
            <IncomeCard />
            <BreakdownCard />
            <RemainingCard />
            <Visuals />
        </section>
    )
}