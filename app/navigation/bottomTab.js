import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Settings from '../screens/Settings';
import HomeScreen from '../screens/Home';
import {Image} from 'react-native';
import home from "../assets/icons/home.png";
import settings from "../assets/icons/settings.png"

const Tab = createBottomTabNavigator();

const tabOptions = {
  showLabel: false,
  style: {
    height: '10%',
    backgroundColor: '#fff',
  },
};

const BottomTab = () => {

    return (
      <Tab.Navigator
        tabBarOptions={tabOptions}
        screenOptions={({route}) => ({
          tabBarIcon: ({focused}) => {
            const tintColor = focused ? '#6C63FF' : '#ddd';

            switch (route.name) {
              case 'Home':
                return (
                  <Image
                    source={home}
                    resizeMode="contain"
                    style={{
                      tintColor: tintColor,
                      width: 25,
                      height: 25,
                    }}
                  />
                );

              case 'Setting':
                return (
                  <Image
                    source={settings}
                    resizeMode="contain"
                    style={{
                      tintColor: tintColor,
                      width: 25,
                      height: 25,
                    }}
                  />
                );
            }
          },
        })}>
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Setting" component={Settings} />
      </Tab.Navigator>
    );
}

export default BottomTab;