import React from 'react';
import "../Styles/Summary.css"

export default function Summary({ transactions }){
  const totalIncome = transactions
    .filter((t) => t.type === 'Income')
    .reduce((acc, t) => acc + Number(t.amount), 0);
  
  const totalExpenses = transactions
    .filter((t) => t.type === 'Expense')
    .reduce((acc, t) => acc + Number(t.amount), 0);
  
  const balance = totalIncome - totalExpenses;

  return (
    <div className='summary'>
      <h2>Summary</h2>
      <div className="summary-category">
        <div className="summary-income"><p>Total Income:&#8377; {totalIncome}</p></div>
      <div className="summary-expense"> <p>Total Expenses:&#8377; {totalExpenses}</p></div>
     
      </div>
      <p className='balance'>Balance: &#8377; {balance}</p>
    </div>
  );
}