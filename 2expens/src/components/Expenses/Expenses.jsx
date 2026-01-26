import React, { useState } from 'react';
import '../Expenses/Expenses.css';
import Card from '../ui/Card.jsx';
import ExpensesFilter from './ExpensesFilter.jsx';
import ExpenseItem from './Expenseitem.jsx';

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState('2026');

  const filterChangeHandler = (selectedYear) => {
    console.log('Expenses.jsx');
    setFilteredYear(selectedYear);
  };

  const filteredExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  return (

    <Card className="expenses">
      <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />

      {filteredExpenses.map((expense) => (
        <ExpenseItem 
          key={expense.id}
          data={expense} 
        />
      ))}
    </Card>
  );
}

export default Expenses;