import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const ExpensesOutput = ({expenses}) => {
  return (
    <View>
      <View>
        <Text>Last 7 days</Text>
        <Text>93$</Text>
      </View>
      <FlatList   />
    </View>
  );
}

export default ExpensesOutput

const styles = StyleSheet.create({})