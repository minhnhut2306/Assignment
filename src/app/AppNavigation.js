import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import AuthenStackNavigation from './authen/AuthenStackNavigation';
import MainStackNavigation from './main/MainStackNavigation';
const AppNavigation = () => {
  const AuthenStackNavigation1 = false;

  return (
    <NavigationContainer>
      {AuthenStackNavigation1 ? <AuthenStackNavigation /> : <MainStackNavigation />}
    </NavigationContainer>
  );
};

export default AppNavigation;
