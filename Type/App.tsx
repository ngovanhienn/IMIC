import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {View} from 'react-native';
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import Popular from './Bai6/Popular';
import Top from './Bai6/Top';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const StackScreen = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Popular" component={Popular} />
      <Tab.Screen name="Top" component={Top} />
    </Tab.Navigator>
  );
}
function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={screenOptions}>
        <Stack.Screen name="StackScreen" component={StackScreen}  />
        {/* <Stack.Screen name="Top" component={Top} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
const screenOptions = {
  headerShown: false,
};

export default App;