import { StyleSheet, } from 'react-native'
import React, { useContext } from 'react'
import ExpensesOutput from '../components/Expenses/ExpensesOutput'
import { ExpensesContext } from '../context/expenses-context'

const AllExpenses = () => {

  const expensesCtx = useContext(ExpensesContext)


  return (
    <ExpensesOutput
      expenses={expensesCtx.expenses}
      expensesPeriod={"Total"}
      fallbackText={"No Registered Expenses Found !"}
    />
  );
}

export default AllExpenses

const styles = StyleSheet.create({

    
})