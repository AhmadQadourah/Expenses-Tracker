import { createContext, useReducer } from "react";



export const ExpensesContext = createContext({
  expenses: [],
  addExpense: ({ description, amount, data }) => {},
  deleteExpense: (id) => {},
  updateExpense: (id, { description, amount, data }) => {},
  setExpenses:(expenses)=>{}
});


function expensesReducer(state, action) {
  switch (action.type) {
    case "ADD":
      return [action.payload, ...state];
      case 'SET' : const inverted = action.payload.reverse()
      return inverted ;
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
  const [expensesState, dispatch] = useReducer(expensesReducer,[]);



  function addExpense(expensesData) {
    dispatch({ type: "ADD", payload: expensesData });
  }

  function deleteExpense(id) {
    dispatch({ type: "DELETE", payload: id });
  }

  function updateExpense(id, expensesData) {
    dispatch({ type: "UPDATE", payload: { id: id, data: expensesData } });
  }

  function setExpenses(expenses) {
    dispatch({type : "SET" , payload: expenses})
  }
  

const value ={
    expenses: expensesState,
    addExpense:addExpense,
    deleteExpense:deleteExpense,
    updateExpense:updateExpense,
    setExpenses:setExpenses
}



  return <ExpensesContext.Provider value={value} >{children}</ExpensesContext.Provider>;
}

export default ExpensesContextProvider;
