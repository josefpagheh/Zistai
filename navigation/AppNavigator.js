import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TestMenu from '../screens/TestMenu';
import EntryPage from '../screens/EntryPage';
import LoginPage from '../screens/LoginPage';
import LoginFormPage from '../screens/LoginFormPage';
import MainPage from '../screens/MainPage';
import CoursePage from '../screens/CoursePage';
import QuestionPage from '../screens/QuestionPage';

const Stack = createNativeStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="TestMenu">
        <Stack.Screen name='TestMenu' component={TestMenu} options={{title: 'Test Menu'}} />
        <Stack.Screen name='EntryPage' component={EntryPage} />
        <Stack.Screen name='LoginPage' component={LoginPage} />
        <Stack.Screen name='LoginFormPage' component={LoginFormPage} options={{headerTitle: 'ورود'}} />
        <Stack.Screen name='MainPage' component={MainPage} options={{headerTitle: 'ZistAI'}} />
        <Stack.Screen name='CoursePage' component={CoursePage} options={{headerTitle: 'ZistAI'}} />
        <Stack.Screen name='QuestionPage' component={QuestionPage} options={{headerTitle: 'ZistAI'}} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
