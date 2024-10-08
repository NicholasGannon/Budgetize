import 'chart.js/auto';
import { Doughnut } from "react-chartjs-2";

export default function Visuals() {
    const month = new Date().toLocaleString('default', { month: 'long' });
    const year = new Date().getFullYear();

    return (
        <div className="outline outline-1 outline-gray-300 p-4 rounded bg-white" style={{ gridArea: "1 / 3 / 5 / 6" }}>
            <h2 className="text-2xl font-medium">{month}</h2>
            <p className="text-base font-light">{year}</p>
            <div className='max-w-xl mx-auto'>
                {/* <Doughnut
                    
                /> */}
            </div>
        </div>
    )
}
