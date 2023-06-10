import React,{useState} from 'react';
import './NewExpense.css';
import ExpenseForm from './ExpenseForm';

const NewExpense = (props) => {

    const [showForm,setShowForm] = useState(false);

    const showExpenseFormHandler = () => {
        setShowForm(true);
    }

    const cancelExpenseFormHandler = () => {
        setShowForm(false);
    }

    const onSaveExpeneseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        };
        props.onAddExpense(expenseData);
        setShowForm(false);
    }

    return (
    <div className='new-expense'>
        {showForm && <ExpenseForm onCancelExpenseForm={cancelExpenseFormHandler} onSaveExpenseData={onSaveExpeneseDataHandler} />}
        {!showForm &&
            <div>
                <button onClick={showExpenseFormHandler}>Add New Expense</button>
            </div>
        }
    </div>
    ); 
}
export default NewExpense;