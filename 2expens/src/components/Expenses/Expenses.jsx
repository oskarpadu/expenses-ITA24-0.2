import React, { useState } from 'react';
import '../Expenses/Expenses.css';
import Card from '../ui/Card.jsx';
import ExpensesFilter from './ExpensesFilter.jsx';
import ExpenseItem from './Expenseitem.jsx';

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState('2026');

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

console.log('Valitud aasta:', filteredYear);

  const filteredExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  console.log ('Filtreeritud kulud:', filteredExpenses);

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