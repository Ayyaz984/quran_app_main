import {View, Text} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import OnBoarding from '../screens/OnBoarding';
import DrawerNavigation from './DrawerNavigation';
import {useSelector} from 'react-redux';

const StackNavigation = () => {
  const Stack = createNativeStackNavigator();

  const {AppLoadFirstTime} = useSelector(state => state.AppLoadFirst);
  console.log('Stack Navigation 12:', AppLoadFirstTime);
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      {AppLoadFirstTime ? (
        <Stack.Screen name="OnBoarding" component={OnBoarding} />
      ) : (
        <Stack.Screen name="Main">
          {props => <DrawerNavigation {...props} />}
        </Stack.Screen>
      )}
    </Stack.Navigator>
  );
};

export default StackNavigation;
