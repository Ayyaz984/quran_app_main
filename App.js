import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import StackNavigation from './src/navigation/StackNavigation';
import SplashScreen from 'react-native-splash-screen';
import {SafeAreaView} from 'react-native';

export default function App() {
  React.useEffect(() => {
    SplashScreen.hide();
  }, []);
  return (
    <NavigationContainer>
      <SafeAreaView style={{flex: 1}}>
        <StackNavigation />
      </SafeAreaView>
    </NavigationContainer>
  );
}
