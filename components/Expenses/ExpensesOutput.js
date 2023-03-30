import { FlatList, StyleSheet, Text, View } from "react-native";
import React from "react";
import ExpensesSummary from "./ExpensesSummary";
import ExpensesList from "./ExpensesList";
import { GlobalStyles } from "../../constanse/Styles";


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


function ExpensesOutput({ expenses, expensesPeriod,fallbackText }) {

let content = <Text style={styles.infoText}>{fallbackText}</Text>

if (expenses.length > 0) {
  content = <ExpensesList expenses={expenses} /> 
}

  return (
    <View style={styles.container}>
      <ExpensesSummary expenses={expenses} periodName={expensesPeriod} />
      {content}
    </View>
  );
}



export default ExpensesOutput;

const styles = StyleSheet.create({
  container:{
    paddingTop:24,
    paddingHorizontal:24,
    paddingBottom:0,
    backgroundColor:GlobalStyles.colors.primary700,
    flex:1
  },
  infoText: {
    color :'white',
    fontSize:16,
    textAlign:'center',
    marginTop:32
  }
});
