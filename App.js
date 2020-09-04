import 'react-native-gesture-handler';
import React, {useEffect} from 'react';
import {StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Login from './src/screens/Login';

const Stack = createStackNavigator();

export default () => {
  useEffect(() => {}, []);

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            options={{headerShown: false}}
            name="login"
            component={Login}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
};
