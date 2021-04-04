import React from 'react'
import {createStackNavigator} from '@react-navigation/stack';
import BottomTab from './bottomTab';
import Onboarding from '../components/Onboarding';
import Login from '../screens/Login';
import Signup from '../screens/Signup';

const Stack = createStackNavigator();

const HomeStack = () => {
    return (
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
        // initialRouteName={'Home'}
        >
        {/* <Stack.Screen name="Onboarding" component={Onboarding} /> */}
        <Stack.Screen name="Home" component={BottomTab} />
      </Stack.Navigator>
    );
}

export default HomeStack;