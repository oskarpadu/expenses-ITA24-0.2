import '../Expenses/Expenses.css';
import Card from '../ui/Card.jsx';

const Expenses = (props) => {
  return (
    <Card className="expenses">
      {props.children}
    </Card>
  );
}

export default Expenses;
