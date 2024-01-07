import {View, Text} from 'react-native';
import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import ViewPDF from '../screens/ViewPDF';
import CustomDrawerContent from '../components/drawer/CustomDrawerContent';

const Drawer = createDrawerNavigator();
const DrawerNavigation = () => {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerShown: false,
      }}
      drawerContent={props => <CustomDrawerContent {...props} />}>
      <Drawer.Screen name="ViewPDF" component={ViewPDF} />
    </Drawer.Navigator>
  );
};

export default DrawerNavigation;
