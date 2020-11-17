import 'react-native-gesture-handler';
import React, {useEffect} from 'react';
import {ThemeProvider} from '@shopify/restyle';
import SplashScreen from 'react-native-splash-screen';
import {NavigationContainer} from '@react-navigation/native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {AuthenticationNavigator} from './src/Authentication';
import {createStackNavigator} from '@react-navigation/stack';
import {Provider, useSelector, useDispatch} from 'react-redux';
import AsyncStorage from '@react-native-community/async-storage';

import store from './store';
import {theme} from './src/Components';
import {AppStackRoutes} from './src/Components/Routes';
import {HomeNavigator} from './src/Home';
import {checkLoggedIn} from './reducers/checkLoggedIn';

const AppStack = createStackNavigator<AppStackRoutes>();

function App() {
  const stateAuth = useSelector((state) => state.authState);
  const dispatch = useDispatch();
  const getData = async () => {
    try {
      const value = await AsyncStorage.getItem('@storage_Key');
      dispatch(checkLoggedIn(value));
      if (value !== null) {
        // value previously stored
      }
    } catch (e) {
      // error reading value
    }
  };

  useEffect(() => {
    setTimeout(() => {
      SplashScreen.hide();
    }, 500);
    getData();
  }, []);
  return (
    <ThemeProvider {...{theme}}>
      <NavigationContainer>
        <SafeAreaProvider>
          <AppStack.Navigator headerMode="none">
            {stateAuth.isSigned ? (
              <>
                <AppStack.Screen
                  name="HomeNavigator"
                  component={HomeNavigator}
                />
              </>
            ) : (
              <>
                <AppStack.Screen
                  name="Authentication"
                  component={AuthenticationNavigator}
                />
              </>
            )}
          </AppStack.Navigator>
        </SafeAreaProvider>
      </NavigationContainer>
    </ThemeProvider>
  );
}

const AppWrapper = () => {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
};

export default AppWrapper;
