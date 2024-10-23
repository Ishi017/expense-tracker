import React, { useState, useEffect } from 'react';
import TransactionForm from '../Components/TransactionForm.jsx';
import TransactionList from '../Components/TransactionList.jsx';
import Summary from '../Components/Summary.jsx';
import ChartComponent from '../Components/ChartComponent.jsx';
import "../Styles/Main.css";

export default function Main(){

    const [transactions, setTransactions] = useState(() => {
        const storedTransactions = localStorage.getItem('transactions');
        return storedTransactions ? JSON.parse(storedTransactions) : [];
      });
    
      const addTransaction = (transaction) => {
        const updatedTransactions = [...transactions, transaction];
        setTransactions(updatedTransactions);
        localStorage.setItem('transactions', JSON.stringify(updatedTransactions));
      };
    
      const deleteTransaction = (id) => {
        const updatedTransactions = transactions.filter((t) => t.id !== id);
        setTransactions(updatedTransactions);
        localStorage.setItem('transactions', JSON.stringify(updatedTransactions));
      };

      const editTransaction = (id, updatedTransaction) => {
        setTransactions(transactions.map(t => 
          t.id === id ? { ...t, ...updatedTransaction } : t
        ));
      };


   return( 
    <div className='main-page'>

        <div className="main-add-transact">
        <TransactionForm addTransaction={addTransaction}/>
        </div>

       <div className="main-details">
       <h1>EXPENSE TRACKER</h1>
       <Summary  transactions={transactions}/>
       <ChartComponent transactions={transactions} />
       </div>

       <div className="main-list">
       <TransactionList transactions={transactions} deleteTransaction={deleteTransaction} editTransaction={editTransaction}/>
       </div>
             
    </div>
   );
}