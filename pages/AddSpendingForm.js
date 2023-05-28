import React, { useState } from "react";
import { AiOutlineUpload } from "react-icons/ai";

export default function AddSpendingForm({ handleAddSpending }) {
  const [spendingAmount, setSpendingAmount] = useState("");

  const handleSpendingInputChange = (e) => {
    setSpendingAmount(e.target.value);
  };

  const handleAddSpendingClick = () => {
    const amount = parseFloat(spendingAmount);
    if (!isNaN(amount)) {
      handleAddSpending(amount);
      setSpendingAmount("");
    }
  };

  return (
    <div className="flex flex-row items-center">
      <input
        type="number"
        value={spendingAmount}
        onChange={handleSpendingInputChange}
        className="ms-2 py-1 px-2 rounded text-black"
        placeholder="Amount"
      />
      <button
        className="ml-2 bg-red-500 hover:bg-red-600 text-white py-1 px-2 rounded flex flex-row items-center"
        onClick={handleAddSpendingClick}
      >
        <AiOutlineUpload />
        <h4 className="ms-2">Add Spending</h4>
      </button>
    </div>
  );
}
