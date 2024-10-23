import React, { useState } from 'react';
import '../Styles/TransactionList.css'; 

const TransactionList = ({ transactions, deleteTransaction, editTransaction }) => {
  const [editMode, setEditMode] = useState(null);
  const [editedTransaction, setEditedTransaction] = useState({
    type: '',
    category: '',
    amount: ''
  });

  // Function to handle the editing mode
  const handleEditClick = (transaction) => {
    setEditMode(transaction.id);
    setEditedTransaction({
      type: transaction.type,
      category: transaction.category,
      amount: transaction.amount
    });
  };

  // Function to handle input change for the edit form
  const handleInputChange = (e) => {
    setEditedTransaction({
      ...editedTransaction,
      [e.target.name]: e.target.value
    });
  };

  // Function to handle the form submission and save the edited transaction
  const handleSaveClick = (id) => {
    editTransaction(id, editedTransaction);
    setEditMode(null); // Exit edit mode after saving
  };

  return (
    <div className="transaction-list">
      <h2>Transactions</h2>
      <ul>
        {transactions.map((transaction) => (
          <li key={transaction.id} className="transaction-item">
            {editMode === transaction.id ? (
              // Edit Form
              <div className="transaction-details">
                <div className="transaction-info">
                  <select
                    name="type"
                    value={editedTransaction.type}
                    onChange={handleInputChange}
                  >
                    <option value="Income">Income</option>
                    <option value="Expense">Expense</option>
                  </select>
                  <input
                    type="text"
                    name="category"
                    value={editedTransaction.category}
                    onChange={handleInputChange}
                    placeholder="Category"
                  />
                </div>
                <input
                  type="number"
                  name="amount"
                  value={editedTransaction.amount}
                  onChange={handleInputChange}
                  placeholder="Amount"
                />
                <button
                  onClick={() => handleSaveClick(transaction.id)}
                  className="save-button"
                >
                  Save
                </button>
              </div>
            ) : (
              // Display Transaction Info
              <div className="transaction-details">
                <div className="transaction-info">
                  <span className="transaction-type">{transaction.type} : </span>
                  <span className="transaction-category">{transaction.category}</span>
                </div>
                <span className="transaction-amount">&#8377;{transaction.amount}</span>
              </div>
            )}

            {editMode !== transaction.id && (
              <div className="transaction-buttons">
                <button
                  onClick={() => handleEditClick(transaction)}
                  className="edit-button"
                >
                  Edit
                </button>
                <button
                  onClick={() => deleteTransaction(transaction.id)}
                  className="delete-button"
                >
                  Delete
                </button>
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TransactionList;