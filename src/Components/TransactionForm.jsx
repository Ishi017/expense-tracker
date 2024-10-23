import React, { useState } from 'react';
import "../Styles/TransactionForm.css";

export default function TransactionForm({ addTransaction }){
  const [formData, setFormData] = useState({
    type: 'Income',
    amount: '',
    category: '',
    date: '',
    description: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addTransaction({ ...formData, id: Date.now() });
    setFormData({
      type: 'Income',
      amount: '',
      category: '',
      date: '',
      description: '',
    });
  };

  return (
    <form onSubmit={handleSubmit}>
       <h3>Add a new transaction !</h3>
      <select name="type" value={formData.type} onChange={handleChange}>
        <option value="Income">Income</option>
        <option value="Expense">Expense</option>
      </select>
      <input type="number" name="amount" placeholder="Amount" value={formData.amount} onChange={handleChange} required />
      <input type="text" name="category" placeholder="Category" value={formData.category} onChange={handleChange} required />
      <input type="date" name="date" value={formData.date} onChange={handleChange} required />
      <input type="text" name="description" placeholder="Description" value={formData.description} onChange={handleChange} required />
      <button type="submit">Add Transaction</button>
    </form>
  );
}