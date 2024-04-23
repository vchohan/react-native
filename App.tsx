import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import DashboardHome from './src/screens/DashboardHome';
import {Text} from 'react-native';

const App = () => {
  return (
    <NavigationContainer>
      <DashboardHome />
    </NavigationContainer>
  );
};

export default App;
