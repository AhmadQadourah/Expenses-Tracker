import { createContext, useReducer } from "react";

const DUMMY_EXPENSES = [
  {
    id: "e1",
    description: "Elden Ring game",
    amount: 59.99,
    date: new Date("2021-12-19"),
  },
  {
    id: "e2",
    description: "New Mobile",
    amount: 259.99,
    date: new Date("2022-05-05"),
  },
  {
    id: "e3",
    description: " T-shirt",
    amount: 29.99,
    date: new Date("2023-03-29"),
  },
  {
    id: "e4",
    description: "Gaming Chair",
    amount: 59.99,
    date: new Date("2023-03-25"),
  },
];

export const ExpensesContext = createContext({
  expenses: [],
  addExpense: ({ description, amount, data }) => {},
  deleteExpense: (id) => {},
  updateExpense: (id, { description, amount, data }) => {},
});


function expensesReducer(state, action) {
  switch (action.type) {
    case "ADD":
      const id = new Date().toString() + Math.random().toString();
      return [{ ...action.payload,id:id }, ...state];
    case "UPDATE":
      const updatbleExpenseIndex = state.findIndex(
        (expense) => expense.id === action.payload.id
      );
      const updatbleExpense = state[updatbleExpenseIndex];
      const updatedItem = { ...updatbleExpense, ...action.payload.data };
      const updatedExpenses = [...state];
      updatedExpenses[updatbleExpenseIndex] = updatedItem;
      return updatedExpenses;
    case "DELETE":
     return state.filter((expense) => expense.id !== action.payload);
    default:
      return state;
  }
}

function ExpensesContextProvider({ children }) {
  const [expensesState, dispatch] = useReducer(expensesReducer,DUMMY_EXPENSES);



  function addExpense(expensesData) {
    dispatch({ type: "ADD", payload: expensesData });
  }

  function deleteExpense(id) {
    dispatch({ type: "DELETE", payload: id });
  }

  function updateExpense(id, expensesData) {
    dispatch({ type: "UPDATE", payload: { id: id, data: expensesData } });
  }

  

const value ={
    expenses: expensesState,
    addExpense:addExpense,
    deleteExpense:deleteExpense,
    updateExpense:updateExpense
}



  return <ExpensesContext.Provider value={value} >{children}</ExpensesContext.Provider>;
}

export default ExpensesContextProvider;
