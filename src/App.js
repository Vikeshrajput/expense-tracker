import React, {useState} from "react";

import NewExpense from "./components/NewExpense/NewExpense";
import Expenses from "./components/Expenses/Expenses";

const DUMMY_EXPENSES = [
  {
    id: "e1",
    title: "Toilet Paper",
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  {
    id: "e2",
    title: "New TV",
    amount: 54.42,
    date: new Date(2022, 2, 14),
  },
  {
    id: "e3",
    title: "Shoes",
    amount: 449.42,
    date: new Date(2022, 2, 14),
  },
  {
    id: "e4",
    title: "Book",
    amount: 49.42,
    date: new Date(2022, 2, 14),
  },
  {
    id: "e5",
    title: "Car Insurance",
    amount: 654.45,
    date: new Date(2022, 7, 14),
  },
  {
    id: "e6",
    title: "New Desk (Wooden)",
    amount: 450,
    date: new Date(2022, 1, 14),
  },
];

const App = () => {
  // const para = document.createElement('p');
  // para.textContent="this is also visible";
  // document.getElementById('root').append(para);
  

  const [newExpenseData, setNewExpenseData] = useState(DUMMY_EXPENSES);

  const addExpenseHandler = (expense) => {
    setNewExpenseData(prevExpense => {
      return [expense, ...prevExpense];
    });
  };
  console.log(newExpenseData);

  // return React.createElement(
  //   "div",
  //   {},
  //   React.createElement("h1", {}, "let's get started"),
  //   React.createElement(Expenses, { expenses: expenses })
  // );

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses expenses={newExpenseData} />
    </div>
  );
}

export default App;
