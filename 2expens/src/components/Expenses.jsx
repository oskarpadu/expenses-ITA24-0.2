import './Expenses.css';
import Card from '../ui/Card';

const Expenses = (props) => {
  return (
    <Card className="expenses">
      {props.children}
    </Card>
  );
}

export default Expenses;
