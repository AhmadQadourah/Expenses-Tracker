import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import {NavigationContainer} from '@react-navigation/native'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import ManageExpenses from './components/ManageExpenses'
import RecentExpenses from './components/RecentExpenses'
import AllExpenses from  './components/AllExpenses'
import { GlobalStyles } from './constanse/Styles';
const Stack = createNativeStackNavigator()
const Bottom= createBottomTabNavigator()

function ExpensesOverView(){
  return (
    <Bottom.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: GlobalStyles.colors.primary500 },
        headerTintColor: "white",
        tabBarStyle: { backgroundColor: GlobalStyles.colors.primary500 },
        tabBarActiveTintColor: GlobalStyles.colors.accent500
      }}
    >
      <Bottom.Screen  name="RecentExpenses" component={RecentExpenses} options={{
        title:'Recent Expenses' ,
        tabBarLabel: 'Recent'
      }} />
      <Bottom.Screen name="AllExpenses" component={AllExpenses} />
    </Bottom.Navigator>
  );
}




export default function App() {


  return (
    <>
      <StatusBar style="auto" />
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="ExpensesOverView" component={ExpensesOverView} options={{headerShown:false}} />
          <Stack.Screen name="ManageExpenses" component={ManageExpenses} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

