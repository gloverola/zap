import React, {useState, useEffect, useContext, useMemo} from 'react'
import { StyleSheet, ActivityIndicator, View} from 'react-native'
import {NavigationContainer, DefaultTheme} from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import HomeStack from './navigation/stack';
import Login from './screens/Login';
import Signup from './screens/Signup';
import {Authstate} from './context/authContext';
import AuthStack from './navigation/authStack';
import {AuthContext} from './context/authContext';
import Onboarding from './components/Onboarding';


const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    border: 'transparent',
  },
};


const App = () => {

  const [firstLaunch, setFirstLaunch] = useState(null);
  const [loading, setLoading] = useState(false);
  const [userToken, setUsertoken] = useState(null);

  const AuthState = useMemo(() => ({
     login: async (secretPin) => {
       const PIN = await AsyncStorage.getItem('@user_token');
      if (secretPin === PIN) {
        setUsertoken()
      }
    },

    signup: () => {

    },

    signout: () => {

    }
  }), []);

  useEffect(() => {
    AsyncStorage.getItem('alreadyLaunched').then(value => {
      if(value === null) {
        AsyncStorage.setItem('alreadyLaunched', 'true');
        setFirstLaunch(true)
      } else {
        setFirstLaunch(false);
      }
    })
  }, []);

  const getUserToken = async () => {
    try {
      const token = await AsyncStorage.getItem('@user_token');
      setUsertoken(token)
      
    } catch (e) {
      console.log('@getUserToken :', e);
    }
  };

  useEffect(() => {
    getUserToken();
  }, [])

  console.log(userToken);

  if(firstLaunch === true) {
    <Onboarding />
  }

  if(loading) {
    return (
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <ActivityIndicator size="large" color="#6C63FF" />
      </View>
    );
  }
return (
  <AuthContext.Provider value={AuthState}>
    <NavigationContainer theme={theme}>
      {
        userToken !== null ? <HomeStack /> : <AuthStack />
      }
    </NavigationContainer>
  </AuthContext.Provider>
);

  
}

export default App

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
})
