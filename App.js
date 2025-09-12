import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useFonts } from 'expo-font';

// import {Link, Stack} from 'expo-router';
import ListScreens from './screens/ListScreens';
import EntryPage from './screens/EntryPage';
import AuthPage from './screens/AuthPage';
import MainPage from './screens/MainPage';
import CoursePage from './screens/CoursePage';
import mainHeader from './components/MainHeader';
import QuestionPage from './screens/QuestionPage';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
const Stack = createNativeStackNavigator();


export default function App() {
  const [fontsLoaded] = useFonts({
    'IRANSans': require('./assets/fonts/IRANSans.ttf'),
    'IRANSansDN-Bold': require('./assets/fonts/IRANSansDN-Bold.ttf'),
    'IRANSansDN': require('./assets/fonts/IRANSansDN.ttf'),
    'IRANSansDN_Light': require('./assets/fonts/IRANSansDN_Light.ttf'),
    'IRANSans_Black': require('./assets/fonts/IRANSans_Black.ttf'),
    'IRANSans_Bold': require('./assets/fonts/IRANSans_Bold.ttf'),
    'IRANSans_Light': require('./assets/fonts/IRANSans_Light.ttf'),
    'IRANSans_Medium': require('./assets/fonts/IRANSans_Medium.ttf'),
    'IRANSans_UltraLight': require('./assets/fonts/IRANSans_UltraLight.ttf'),
  });

  if (!fontsLoaded) {
    return <View />;
  }

  return (
    <View style={{maxWidth:750, marginHorizontal: 'auto', flex: 1}}>
      <NavigationContainer>
        <Stack.Navigator  screenOptions={{
          headerShown: false
        }}>
          <Stack.Screen name='EntryPage' component={EntryPage} />
          <Stack.Screen name='AuthPage' component={AuthPage} />
          <Stack.Screen name='MainPage' component={MainPage} />
          <Stack.Screen name='CoursePage' component={CoursePage} />
          <Stack.Screen name='QuestionPage' component={QuestionPage} />
          <Stack.Screen name='ListScreens' component={ListScreens} />
        </Stack.Navigator>
      </NavigationContainer>
    </View>
  );
}
