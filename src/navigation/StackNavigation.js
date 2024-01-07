import {View, Text} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import OnBoarding from '../screens/OnBoarding';
import DrawerNavigation from './DrawerNavigation';
import {useSelector} from 'react-redux';
import TajweedRules from '../screens/TajweedRules';

const StackNavigation = () => {
  const Stack = createNativeStackNavigator();

  const {AppLoadFirstTime} = useSelector(state => state.AppLoadFirst);
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      {AppLoadFirstTime ? (
        <Stack.Screen name="OnBoarding" component={OnBoarding} />
      ) : (
        <>
          <Stack.Screen name="Main">
            {props => <DrawerNavigation {...props} />}
          </Stack.Screen>
          <Stack.Screen
            name="TajweedRules"
            component={TajweedRules}
            options={{headerShown: true, title: 'Tajweed Rules'}}
          />
        </>
      )}
    </Stack.Navigator>
  );
};

export default StackNavigation;
