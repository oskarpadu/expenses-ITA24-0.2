import './Expenses.css';

function Expenses(props) {
  return (
    <div className="expenses">
      {props.children}
    </div>
  );
}

export default Expenses;
