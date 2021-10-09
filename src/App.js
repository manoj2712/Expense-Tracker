import { useState } from "react";
import Expneses from "./components/Expenses/Expenses";
import NewExpenses from "./components/NewExpenses/NewExpenses";

// const Dummy_Data = [
//   {
//     id: "e1",
//     title: "Toilet Paper",
//     amount: 94.12,
//     date: new Date(2020, 7, 14),
//   },
//   { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
//   {
//     id: "e3",
//     title: "Car Insurance",
//     amount: 294.67,
//     date: new Date(2019, 2, 28),
//   },
//   {
//     id: "e4",
//     title: "New Desk (Wooden)",
//     amount: 450,
//     date: new Date(2021, 5, 12),
//   },
// ];
const Dummy_Data=[];
function App() {
  const [expenses,setExpense]=useState(Dummy_Data);
  
  const addExpenseHandler= expense =>{
    setExpense((previousExpenses)=>{
      return [expense, ...previousExpenses];
    });

  }

  return (
    <div>
      <NewExpenses onAddExpense={addExpenseHandler}/>
      <Expneses items={expenses}></Expneses>
    </div>
  );
}

export default App;
