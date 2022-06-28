import * as React from 'react';

//Import Navigation Container
import { NavigationContainer } from '@react-navigation/native';

// Import Stack Navigation
import { createStackNavigator } from '@react-navigation/stack';

//Import Bottom Tab Navigation
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

//Import Icon
import { Ionicons } from '@expo/vector-icons';

// Import Theme Native Base
import { useTheme } from 'native-base';

// Import Screen
import Profile from './src/screens/profile';
import Calculator from './src/screens/calculator';
import Todos from './src/screens/todos';

// Create Stack Navigation
const Stack = createStackNavigator();

//Create Bottom Tab Navigation
const Tab = createBottomTabNavigator();

// Create Component Bottom Tab Navigation
function MyTab() {
  const theme = useTheme();

  return (
    <Tab.Navigator
      initialRouteName="Main"
      screenOptions={({ route }) => ({
        headerMode: 'screen',
        headerTintColor: 'white',
        headerStyle: { backgroundColor: theme.colors.primary['300'] },
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Profile') {
            iconName = focused ? 'ios-person' : 'ios-person-outline';
          } else if (route.name == 'Calculator') {
            iconName = focused ? 'calculator' : 'calculator-outline';
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: theme.colors.primary['800'],
        tabBarInactiveTintColor: 'gray',
      })}
    >
      <Tab.Screen name="Profile" component={Profile} options={{ headerShown: false }} />
      <Tab.Screen name="Calculator" component={Calculator} options={{ headerShown: false }} />
    </Tab.Navigator>
  );
}

export default function Container() {
  // Init Theme
  const theme = useTheme();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Main"
          component={MyTab}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Profile"
          component={Profile}
          options={{
            title: 'My Profile',
          }}
        />
        <Stack.Screen
          name="Todos"
          component={Todos}
          options={{
            title: 'Back To Menu',
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
