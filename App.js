/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';


import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
function HomeScreen1({route}) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Home!asdf</Text>
    </View>
  );
}
function HomeScreen2({route}) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Home2</Text>
    </View>
  );
}
function HomeScreen3({route}) {
  const {id} = route.params

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Home3asdf</Text>
      <Text>{id}</Text>
    </View>
  );
}

function SettingsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Settings!</Text>
    </View>
  );
}
const linking = {
  prefixes: [
    'testbed://'
  ],
  config: {
    screens: {
      Home: {
        initialRouteName: 'HomeScreen1',
        screens: {
          HomeScreen1: 'HomeScreen1/',
          HomeScreen2: 'HomeScreen2/',
          HomeScreen3: {
            path: 'HomeScreen3/:id/',
            parse: {
              id: (id) => `${id}`,
            },
          },
        },
      },
      Settings: 'Settings',
    },
  },
};
// to go to HomeScreen3 => testbed://HomeScreen3

const Tab = createBottomTabNavigator();
const Tab2 = createStackNavigator();

function Home() {
  return (
    <Tab2.Navigator>
      <Tab2.Screen name="HomeScreen1" component={HomeScreen1} />
      <Tab2.Screen name="HomeScreen2" component={HomeScreen2} />
      <Tab2.Screen name="HomeScreen3" component={HomeScreen3} />
    </Tab2.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer linking={linking} fallback={<Text>Loading...</Text>}>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Settings" component={SettingsScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}