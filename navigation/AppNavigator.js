import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faHome, faBook, faQuestionCircle, faVial } from '@fortawesome/free-solid-svg-icons';
import TestMenu from '../screens/TestMenu';
import EntryPage from '../screens/EntryPage';
import LoginPage from '../screens/LoginPage';
import LoginFormPage from '../screens/LoginFormPage';
import MainPage from '../screens/MainPage';
import CoursePage from '../screens/CoursePage';
import QuestionPage from '../screens/QuestionPage';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const AuthStackNavigator = ({ setIsAuthenticated }) => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Entry" component={EntryPage} options={{ headerShown: false }} />
      <Stack.Screen name="Login" component={LoginPage} options={{ headerShown: false }} />
      <Stack.Screen name="LoginForm" options={{ headerShown: false }}>
        {() => <LoginFormPage setIsAuthenticated={setIsAuthenticated} />}
      </Stack.Screen>
    </Stack.Navigator>
  );
};

const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          let iconName;

          if (route.name === 'Main') {
            iconName = faHome;
          } else if (route.name === 'Courses') {
            iconName = faBook;
          } else if (route.name === 'Questions') {
            iconName = faQuestionCircle;
          } else if (route.name === 'TestMenu') {
            iconName = faVial;
          }

          return <FontAwesomeIcon icon={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: '#6AC46A',
        tabBarInactiveTintColor: 'gray',
      })}
    >
      <Tab.Screen name="Main" component={MainPage} options={{ headerShown: false }} />
      <Tab.Screen name="Courses" component={CoursePage} options={{ headerShown: false }} />
      <Tab.Screen name="Questions" component={QuestionPage} options={{ headerShown: false }} />
      <Tab.Screen name="TestMenu" component={TestMenu} options={{ title: 'Test Menu' }} />
    </Tab.Navigator>
  );
};

const AppNavigator = () => {
  const [isAuthenticated, setIsAuthenticated] = React.useState(false);

  return (
    <NavigationContainer>
      <Stack.Navigator>
        {isAuthenticated ? (
          <Stack.Screen name="Root" component={TabNavigator} options={{ headerShown: false }} />
        ) : (
          <Stack.Screen name="Auth" options={{ headerShown: false }}>
            {() => <AuthStackNavigator setIsAuthenticated={setIsAuthenticated} />}
          </Stack.Screen>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
