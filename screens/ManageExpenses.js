import { StyleSheet, Text, View } from 'react-native'
import React, { useLayoutEffect } from 'react'
import IconButton from '../UI/IconButton';
import { GlobalStyles } from '../constanse/Styles';
import Button from '../UI/Button';

const ManageExpenses = ({route,navigation}) => {

const editedExpenseId = route.params?.expenseId;
const isEditing= !! editedExpenseId;


useLayoutEffect(() => {
  navigation.setOptions({
    title: isEditing ? "Edit Expense" : "Add Expense",
  });
}, [navigation,isEditing])

function deleteExpenseHandler(id) {

navigation.goBack();
}

function cancelHandler(id) {

navigation.goBack();
}
function confirmHandler(id) {
  
navigation.goBack();

}


  return (
    <View style={styles.container}>
      <View style={styles.buttons}>
      <Button style={styles.button} onPress={cancelHandler} mode={"flat"}>
        Cancel{" "}
      </Button>
      <Button style={styles.button} onPress={confirmHandler}>{isEditing ? "Update" : "Add"}</Button>
      </View>
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
buttons:{
flexDirection:'row',
justifyContent:'center',
alignItems:'center'
},
button:{
  minWidth:120,
  marginHorizontal:8
}
})