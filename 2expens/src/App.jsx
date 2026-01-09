import './App.css'
import ExpenseDate from './components/ExpenseDate'
import ExpenseItem from './components/Expenseitem'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <ExpenseDate date={new Date(2022, 2, 28)} />
      <ExpenseItem />
    </>
  )
}

export default App
