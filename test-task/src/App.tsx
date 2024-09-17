import React, { useState } from 'react';
import './app.css';

type expenseType = {
  id: number;
  date: string;
  sum: number;
  category: string;
  comment: string;
}

function App() {
  const [expenses, setExpenses] = useState<expenseType[]>([]);
  let nextId = expenses.length + 1;

  const handleSubmit = (e: any) => {
    e.preventDefault();

    const formData = new FormData(e.target);

    const newExpense: expenseType = {
      id: nextId++,
      date: formData.get('date') as string ,
      sum: parseInt(formData.get('sum') as string),
      category: formData.get('category') as string,
      comment: formData.get('comment') as string,
    };

    setExpenses([...expenses, newExpense]);

    e.target.reset();

  };

  return (
    <div className="app">
      <form onSubmit={handleSubmit}>
        <h2>Add Expense</h2>

        <div>
          <label>Date:</label>
          <input type="date" name="date" required />
        </div>

        <div>
          <label>Amount:</label>
          <input type="number" name="sum" placeholder="Enter amount" required />
        </div>

        <div>
          <label>Category:</label>
          <select name="category" required>
            <option value="" disabled selected>
              Select a category
            </option>
            <option value="Groceries">Groceries</option>
            <option value="Transport">Transport</option>
            <option value="Entertainment">Entertainment</option>
          </select>
        </div>

        <div>
          <label>Comment:</label>
          <textarea name="comment" placeholder="Enter a comment"></textarea>
        </div>

        <button type="submit">Add</button>
      </form>

      <h2>Expense List</h2>
      <table cellPadding="10">
        <thead>
          <tr>
            <th>ID</th>
            <th>Date</th>
            <th>Amount</th>
            <th>Category</th>
            <th>Comment</th>
          </tr>
        </thead>
        <tbody>
          {expenses.map((expense) => (
            <tr key={expense.id}>
              <td>{expense.id}</td>
              <td>{expense.date}</td>
              <td>{expense.sum}</td>
              <td>{expense.category}</td>
              <td>{expense.comment}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
