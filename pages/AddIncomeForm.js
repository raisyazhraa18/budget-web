import React, { useState } from "react";
import { AiOutlineDownload } from "react-icons/ai";

export default function AddIncomeForm({ handleAddIncome }) {
  const [incomeAmount, setIncomeAmount] = useState("");

  const handleIncomeInputChange = (e) => {
    setIncomeAmount(e.target.value);
  };

  const handleAddIncomeClick = () => {
    const amount = parseFloat(incomeAmount);
    if (!isNaN(amount)) {
      handleAddIncome(amount);
      setIncomeAmount("");
    }
  };

  return (
    <div className="flex flex-row items-center">
      <input
        type="number"
        value={incomeAmount}
        onChange={handleIncomeInputChange}
        className="ms-2 py-1 px-2 rounded text-black"
        placeholder="Amount"
      />
      <button
        className="ml-2 bg-green-500 hover:bg-green-600 text-white py-1 px-2 rounded flex flex-row items-center"
        onClick={handleAddIncomeClick}
      >
        <AiOutlineDownload />
        <h4 className="ms-2">Add Income</h4>
      </button>
    </div>
  );
}
