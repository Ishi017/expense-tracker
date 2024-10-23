import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart, registerables } from 'chart.js';
import "../Styles/ChartComponent.css";

// Register all necessary components
Chart.register(...registerables);

const ChartComponent = ({ transactions }) => {
  const income = transactions
    .filter((t) => t.type === 'Income')
    .reduce((acc, t) => acc + Number(t.amount), 0);

  const expenses = transactions
    .filter((t) => t.type === 'Expense')
    .reduce((acc, t) => acc + Number(t.amount), 0);

  const data = {
    labels: ['Income', 'Expenses'],
    datasets: [
      {
        label: 'Total',
        data: [income, expenses],
        backgroundColor: ['rgba(253, 84, 4, 0.6)', 'rgba(61, 24, 3, 0.8)'],
      },
    ],
  };

  return (
    <div className="chart-container">
      <h2>Chart</h2>
      <Bar data={data} />
    </div>
  );
};

export default ChartComponent;