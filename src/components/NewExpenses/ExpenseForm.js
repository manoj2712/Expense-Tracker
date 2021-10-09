import { useState } from 'react';
import './ExpenseForm.css';

const ExpneseForm=(props)=>{
    const [enteredTitle,setEnteredTitle] = useState("");
    const titleChangeHandler =(event)=>{
        setEnteredTitle(event.target.value);
    }

    const [enteredAmout,setEnteredAmount]= useState("");
    const amountChangeHandler = (event) =>{
        setEnteredAmount(event.target.value);
    }

    const [enteredDate,setEnteredDate]=useState("");
    const dateChangeHandler=(event)=>{
        setEnteredDate(event.target.value);
    }
    const submitHandler =(event)=>{
        event.preventDefault();
        const expenseData={
            title: enteredTitle,
            amount: +enteredAmout,
            date: new Date(enteredDate)
        };
        props.onSaveExpenseData(expenseData);
        setEnteredAmount('');
        setEnteredDate('');
        setEnteredTitle('');
    }

    return(
        <form onSubmit={submitHandler}>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Title</label>
                    <input type="text" value={enteredTitle} onChange={titleChangeHandler} required/>
                    <label></label>
                </div>
                <div className="new-expense__control">
                    <label>Amount</label>
                    <input type="number" value={enteredAmout} onChange={amountChangeHandler} min='0.01' step='0.01'/>
                    <label></label>
                </div>
                <div className="new-expense__control">
                    <label>Date</label>
                    <input type="date" value={enteredDate} onChange={dateChangeHandler} min="2019-00-01" max="2022-11-31"/>
                    <label></label>
                </div>
                <div className="new-expense__action">
                    <button type="button" onClick={props.onCancel}>Cancle</button>
                    <button type="submit">Add Expense</button>
                </div>
            </div>
        </form>
    );
}

export default ExpneseForm;