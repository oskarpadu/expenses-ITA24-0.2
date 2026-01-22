import React from 'react';
import { useState } from 'react';
import '../Expenses/Expenses.css';
import Card from '../ui/Card.jsx';
import ExpensesFilter from './ExpensesFilter.jsx';

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState('2023');

  const filterChangeHandler = (selectedYear) => {
    console.log('Year data in Expenses.js ' + selectedYear);
    setFilteredYear(selectedYear);
  };

  return (
    <Card className="expenses">
      <div className='expenses-filter'>
        <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />
      </div>
      {props.children}
    </Card>
  );
}

export default Expenses;
