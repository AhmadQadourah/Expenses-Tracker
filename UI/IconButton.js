import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import {Ionicons} from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'


const IconButton = ({icon,size,color,onPress}) => {
const navigation=useNavigation();

  return (
  <Pressable style={({pressed})=> pressed && styles.pressed} onPress={onPress}>
    <View style={styles.buttonContainer}>
        <Ionicons name={icon} size={size} color={color} onPress={()=>{}}/>
    </View>
  </Pressable>
  )
}

export default IconButton

const styles = StyleSheet.create({
  buttonContainer:{
    borderRadius:24,
    padding:6,
    marginHorizontal:8,
    marginVertical:2
  },
  pressed:{
    opacity:0.75
  }
})