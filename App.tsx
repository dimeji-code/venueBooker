import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import BottomTab from './components/BottomTab';
// import 'react-native-gesture-handler';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

import Home from './screens/Home';
import { FontAwesome } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { NavigationContainer } from '@react-navigation/native';
import Venue from './screens/Venue';
import Find from './screens/Find';
import Suggested from './screens/Suggested';


const MainStack = createNativeStackNavigator();
const FindStack = createNativeStackNavigator();
const Tab = createMaterialBottomTabNavigator();

const MainStackNav = () =>{
  return(
    <MainStack.Navigator>
        <MainStack.Screen name="Home" component={Home} />
        <MainStack.Screen name="Venue" component={Venue} />
      </MainStack.Navigator>
  )
}

const FindStackNav = () =>{
  return(
    <FindStack.Navigator>
        <FindStack.Screen options={{
          headerShown: false,
        }} name="Find" component={Find} />
        <FindStack.Screen
        name="Suggested" component={Suggested}
         />
      </FindStack.Navigator>
  )
}

const TabNav = () =>{
  return(
    <Tab.Navigator>
      <Tab.Screen 
      options={{
        tabBarIcon: ()=> (<FontAwesome name="home" size={24} color="black" />)
      }} 
      name="home" 
      component={MainStackNav} />
      <Tab.Screen
      options={{
        tabBarIcon: ()=> (<AntDesign name="find" size={24} color="black" />)
      }}
      name="locate" 
      component={FindStackNav} />
    </Tab.Navigator>
  )
}

export default function App() {

  return (
    <>
    <StatusBar style='dark' />
    <NavigationContainer>
      <TabNav/>

    </NavigationContainer>
    
    {/* <BottomTab/> */}


    </>
  )}
    
  
  

const styles = StyleSheet.create({
  
  
});
