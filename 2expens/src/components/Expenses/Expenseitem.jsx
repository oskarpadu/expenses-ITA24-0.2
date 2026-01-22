import ExpenseDate from '../Expenses/ExpenseDate.jsx';
import '../Expenses/Expenseitem.css';
import Card from '../ui/Card.jsx';

const ExpenseItem = (props) => {
    const [title, setTitle] = useState(props.expensedata.title);

    const clickHandler = () => {
        console.log('Clicked!');
        setTitle(`Updated by Click ${title}`);
        console.log(title);
    };
    
    console.log(props.data.date);
    
    return (

        <Card className="expense-item">
            <ExpenseDate date={props.data.date} />
            <div>{props.data.date.toString()}</div>
            <div className="expense-item__description">
                <h2>{props.data.title}</h2>
                <div className="expense-item__price">${props.data.price}</div>
            </div>
            <button onClick={clickHandler}>Click Me</button>
        </Card>
    );
};

export default ExpenseItem;