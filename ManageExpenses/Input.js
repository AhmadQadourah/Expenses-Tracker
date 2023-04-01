import { StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import { GlobalStyles } from '../constanse/Styles'

const Input = ({label,textInputConfig,style,invalid}) => {


    const inputStyles =[styles.input]

    if (textInputConfig&&textInputConfig.multiline){
        inputStyles.push(styles.inputMultiline)
    }

  return (
    <View style={[styles.inputContainer,style]}> 
      <Text style={[styles.label, invalid&&styles.invalidLabel]}>{label}</Text>
      <TextInput style={[styles.input, invalid&&styles.invalidInput]}  {...textInputConfig} />
    </View>
  )
}

export default Input

const styles = StyleSheet.create({
    inputContainer :{
        marginHorizontal:4,
        marginVertical:8,
    
    },
    label:{ 
        fontSize:16,
        color:GlobalStyles.colors.primary100,
marginBottom:4,
    },
input:{
    backgroundColor:GlobalStyles.colors.primary100,
    color:GlobalStyles.colors.primary700,
    padding: 6,
    borderRadius:6,
fontSize:18
},
inputMultiline:{
    minHeight:100,
    textAlignVertical:'top'
},
invalidLabel: {
color:GlobalStyles.colors.error500,

},
invalidInput:{
color:GlobalStyles.colors.error50
}

})