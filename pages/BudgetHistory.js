import React from "react";

const BudgetHistory = ({ history }) => {
  return (
    <ul className="list-disc list-inside mt-4">
      {history &&
        history.map((item, index) => (
          <li key={index}>
            {item.type === "income" ? "+" : "-"} ${item.amount.toFixed(1)}
          </li>
        ))}
    </ul>
  );
};

export default BudgetHistory;
