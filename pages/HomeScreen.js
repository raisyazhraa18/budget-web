import { useState } from "react";
import BudgetHistory from "./BudgetHistory";
import AddIncomeForm from "./AddIncomeForm";
import AddSpendingForm from "./AddSpendingForm";

export default function HomeScreen() {
  const [budget, setBudget] = useState(0.0);
  const [history, setHistory] = useState([]);

  const handleAddIncome = (amount) => {
    const newBudget = divideAndConquerAdd(budget, amount);
    setBudget(newBudget);
    setHistory([...history, { type: "income", amount }]);
  };

  const divideAndConquerAdd = (a, b) => {
    if (b === 0) {
      return a;
    }

    const sum = a ^ b;
    const carry = (a & b) << 1;

    return divideAndConquerAdd(sum, carry);
  };

  const handleAddSpending = (amount) => {
    const newBudget = budget - amount;
    setBudget(newBudget);
    setHistory([...history, { type: "spending", amount }]);
  };

  const clearHistory = () => {
    setHistory([]);
  };

  return (
    <>
      <div className="flex items-center justify-center bg-gray-100 min-h-screen">
        <div className="bg-sky-900 p-6 rounded-lg shadow-md text-center">
          <h1 className="font-bold text-[35px]">My Budget</h1>
          <h4 className="text-[30px] pt-4 font-light">${budget.toFixed(1)}</h4>
          <div className="flex flex-row items-center justify-around pt-4">
            <AddIncomeForm handleAddIncome={handleAddIncome} />
            <AddSpendingForm handleAddSpending={handleAddSpending} />
          </div>
          <div className="mt-8">
            <h3 className="text-xl font-bold">History:</h3>
            <BudgetHistory history={history} />
            <button
              className="mt-4 bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded"
              onClick={clearHistory}
            >
              Clear History
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
