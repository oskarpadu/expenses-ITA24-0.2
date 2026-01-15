import './App.css'
import ExpenseDate from './components/ExpenseDate'
import ExpenseItem from './components/Expenseitem'
import Expenses from './components/Expenses'

function App() {
  const expenses = [
  {
    date: new Date(2026, 1, 9),
    title: 'Car Insurance',
    price: 294.67
  },
  {
    date: new Date(2025, 5, 12),
    title: 'New Desk (Wooden)',
    price: 450
  }  
  ];

  return (
    <div className='App'>
      <Expenses>
        <ExpenseItem data={expenses[0]} />
        <ExpenseItem data={expenses[1]} />
      </Expenses>
    </div>
  )
}

export default App;
