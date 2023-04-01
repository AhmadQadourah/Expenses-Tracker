import { StyleSheet, Text, View } from 'react-native'
import React, { useContext, useLayoutEffect } from 'react'
import IconButton from '../UI/IconButton';
import { GlobalStyles } from '../constanse/Styles';
import Button from '../UI/Button';
import {ExpensesContext} from '../context/expenses-context'
import ExpensesForm from '../ManageExpenses/ExpensesForm';
const ManageExpenses = ({route,navigation}) => {

const expenseCtx= useContext(ExpensesContext);

const editedExpenseId = route.params?.expenseId;
const isEditing= !! editedExpenseId;

const selectedExpense=expenseCtx.expenses.find((expense) => expense.id === editedExpenseId)

useLayoutEffect(() => {
  navigation.setOptions({
    title: isEditing ? "Edit Expense" : "Add Expense",
  });
}, [navigation,isEditing])

function deleteExpenseHandler() {
expenseCtx.deleteExpense(editedExpenseId)
navigation.goBack();
}

function cancelHandler() {

navigation.goBack();
}
function confirmHandler(expenseData) {
if(isEditing){
  expenseCtx.updateExpense(editedExpenseId,expenseData);
} else {
  expenseCtx.addExpense(expenseData)
}

navigation.goBack();

}



  return (
    <View style={styles.container}>
      <ExpensesForm
        onCancel={cancelHandler}
        isEditing={isEditing}
        submitButtonLabel={isEditing ? "Update" : "Add"}
        onSubmit={confirmHandler}
        defaultValues ={selectedExpense}
      />

      {isEditing && (
        <View style={styles.deleteContainer}>
          <IconButton
            icon={"trash"}
            size={36}
            color={GlobalStyles.colors.error500}
            onPress={deleteExpenseHandler}
          />
        </View>
      )}
    </View>
  );
}

export default ManageExpenses

const styles = StyleSheet.create({
container:{
  flex:1,
  padding:24,
  backgroundColor:GlobalStyles.colors.primary800,
},
deleteContainer:{
  marginTop:16,
  paddingTop:8,
  borderTopWidth:2,
  borderTopColor:GlobalStyles.colors.primary200,
  alignItems:'center'
},

})