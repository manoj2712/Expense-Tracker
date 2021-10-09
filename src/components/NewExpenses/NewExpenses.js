import "./NewExpenses.css";
import "./ExpenseForm";
import ExpneseForm from "./ExpenseForm";
import { useState } from "react";
const NewExpenses = (props) => {
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
    isSetEditing(false);
  };
  const [isEditing, isSetEditing] = useState(false);
  const startEditingHandler = () => {
    isSetEditing(true);
  };
  const onStopEditing = () => {
    isSetEditing(false);
  };
  return (
    <div className="new-expense">
      {!isEditing && (
        <button onClick={startEditingHandler}>Add New Expense</button>
      )}
      {isEditing && (
        <ExpneseForm
          onSaveExpenseData={saveExpenseDataHandler}
          onCancel={onStopEditing}
        />
      )}
    </div>
  );
};

export default NewExpenses;
