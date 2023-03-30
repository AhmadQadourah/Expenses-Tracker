import { StyleSheet, Text, View } from "react-native";
import React, { useContext } from "react";
import ExpensesOutput from "../components/Expenses/ExpensesOutput";
import { ExpensesContext } from "../context/expenses-context";
import { getDateMinusDays } from "../util/date";

const RecentExpenses = () => {


const expensesCtx = useContext(ExpensesContext);





const recentExpenses = expensesCtx.expenses.filter((expenses)=> {
  const today =new Date()
  const date7DaysAgo = getDateMinusDays(today,7)


  return (expenses.date> date7DaysAgo) && (expenses.date<= today)
})


  return <ExpensesOutput expenses={recentExpenses} expensesPeriod={"Last 7 Days"} fallbackText='No Registered Expenses Found !' />;
};

export default RecentExpenses;

const styles = StyleSheet.create({});
