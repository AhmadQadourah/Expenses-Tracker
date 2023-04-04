import { StyleSheet } from "react-native";
import React, { useContext, useEffect, useState } from "react";
import ExpensesOutput from "../components/Expenses/ExpensesOutput";
import { ExpensesContext } from "../context/expenses-context";
import { getDateMinusDays } from "../util/date";
import { getExpenses } from "../util/http";
import LoadingOverlay from "../UI/LoadingOverlay";
import ErrorOverlay from "../UI/ErrorOverlay";

const RecentExpenses = () => {

  const [isFetching, setIsFetching] = useState(true)
const [error, setError] = useState(false);

const expensesCtx = useContext(ExpensesContext);



useEffect(() => {

 async function expensesGet() {
    setIsFetching(true)
    try{
      
      const expenses= await getExpenses()
      expensesCtx.setExpenses(expenses)
    } catch(error) {
      setError('Could not load expenses!!')
    }
  setIsFetching(false)
  }
  expensesGet()
}, [])


function errorHandler() {
  setError(null)
}

if (error && !isFetching){
return <ErrorOverlay message={error} />
}

if (isFetching){
  return <LoadingOverlay />
}


const recentExpenses = expensesCtx.expenses.filter((expenses)=> {
  const today =new Date()
  const date7DaysAgo = getDateMinusDays(today,7)


  return (expenses.date> date7DaysAgo) && (expenses.date<= today)
})


  return <ExpensesOutput expenses={recentExpenses} expensesPeriod={"Last 7 Days"} fallbackText='No Registered Expenses Found !' />;
};

export default RecentExpenses;

const styles = StyleSheet.create({});
