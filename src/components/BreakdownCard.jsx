import { useState, useEffect } from 'react';

function BreakdownCard({ setSpending, setCategories }) {
    const [amount, setAmount] = useState('');
    const [category, setCategory] = useState('');
    const [categories, setLocalCategories] = useState([]);

    const handleAddCategory = () => {
        if (amount && category) {
            const newCategories = [...categories, { amount: Number(amount), category }];
            setLocalCategories(newCategories);
            setCategories(newCategories); // Update parent component
            setAmount('');
            setCategory('');
        }
    };

    const handleChangeAmount = (e) => {
        setAmount(e.target.value);
    };

    const handleChangeCategory = (e) => {
        setCategory(e.target.value);
    };

    // Update spending in the parent component whenever categories change
    useEffect(() => {
        const totalSpending = categories.reduce((sum, item) => sum + item.amount, 0);
        setSpending(totalSpending);
    }, [categories, setSpending]);

    return (
        <div className="flex flex-col gap-4 outline outline-1 outline-gray-200 p-4 rounded font-Raleway" style={{ gridArea: "2 / 1 / 4 / 3" }}>
            <h2 className="text-2xl font-medium">Spending Breakdown</h2>
            <p className="text-base font-light">Add new categories for your monthly spending:</p>
            <input
                className="text-base indent-1 outline outline-1 outline-gray-300 rounded-sm"
                type="number"
                placeholder="Amount"
                value={amount}
                onChange={handleChangeAmount}
            />
            <input
                className="text-base indent-1 outline outline-1 outline-gray-300 rounded-sm"
                type="text"
                placeholder="Category"
                value={category}
                onChange={handleChangeCategory}
            />
            <button
                className="mt-2 py-2 px-4 bg-blue-500 text-white rounded"
                onClick={handleAddCategory}
            >
                Add
            </button>
            <ul className="mt-4">
                {categories.map((item, index) => (
                    <li key={index} className="text-base font-light">
                        {item.category}: ${item.amount.toFixed(2)}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default BreakdownCard;
