import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import {Routes} from '../Components/Routes';
import OnBoarding from './onBoarding';
import Welcome from './Welcome';
import Login from './Login';
import SignUp from './SignUp';
import ForgotPassword from './ForgotPassword';

const AuthenticationStack = createStackNavigator<Routes>();

export const AuthenticationNavigator = () => (
  <AuthenticationStack.Navigator headerMode="none">
    <AuthenticationStack.Screen name="OnBoarding" component={OnBoarding} />
    <AuthenticationStack.Screen name="Welcome" component={Welcome} />
    <AuthenticationStack.Screen name="Login" component={Login} />
    <AuthenticationStack.Screen name="SignUp" component={SignUp} />
    <AuthenticationStack.Screen
      name="ForgotPassword"
      component={ForgotPassword}
    />
  </AuthenticationStack.Navigator>
);

export {default as OnBoarding} from './onBoarding';
export {default as Welcome} from './Welcome';
export {default as Login} from './Login';
export {default as SignUp} from './Login';
export {default as ForgotPassword} from './Login';
