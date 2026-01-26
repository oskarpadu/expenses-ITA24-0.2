import ExpenseDate from '../Expenses/ExpenseDate.jsx';
import '../Expenses/Expenseitem.css';
import Card from '../ui/Card.jsx';
import { useState } from 'react';

const ExpenseItem = (props) => {
    const [title, setTitle] = useState(props.data.title);

    const clickHandler = () => {
        setTitle('Uus pealkiri');
    };
    
    console.log(props.data.date);
    
    return (

        <Card className="expense-item">
            <ExpenseDate date={props.data.date} />
            <div className="expense-item__description">
                <h2>{title}</h2>
                <div className="expense-item__price">${props.data.amount}</div>
            </div>
            <button onClick={clickHandler}>Click me</button>
        </Card>
    );
};

export default ExpenseItem;