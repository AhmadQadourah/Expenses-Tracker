import { FlatList, StyleSheet,  View } from 'react-native'
import React from 'react'
import ExpensesItem from './ExpensesItem'





function renderListItem (itemData) {
  return <ExpensesItem {...itemData.item} />
}


const ExpensesList = ({expenses}) => {


  return (
    <View>
<FlatList data={expenses}  renderItem={renderListItem} keyExtractor={(item)=> item.id}/>
    </View>
  )
}

export default ExpensesList

const styles = StyleSheet.create({})