import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import {Link, Stack} from 'expo-router';
import ListScreens from './screens/ListScreens';
import EntryPage from './screens/EntryPage';
import LoginPage from './screens/LoginPage';
import LoginFormPage from './screens/LoginFormPage';
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
  return (
    <View style={{maxWidth:750, marginHorizontal: 'auto', flex: 1}}>
      <NavigationContainer>
        <Stack.Navigator  screenOptions={{
          headerStyle: {
            // backgroundColor: '#80BCBD',
            background: 'transparent'
            // borderBottomColor: '#80BCBD',
            // borderBottomWidth: 4,
            // shadowColor: 'transparent', // this covers iOS
            // elevation: 0,
            // maxWidth: 750,
            // shadowColor: 'transparent',
            // alignItems: 'center',
            // justifyContent: 'center'
          },
          headerTitleStyle: {
            fontSize: 24,
          },
          headerTransparent: true,
          headerTintColor: '#fff',
          headerTitle: '',
          headerTitleAlign: 'center',
          header: () =>  null,
          headerShadowVisible: false
          
        }}>
          <Stack.Screen name='QuestionPage' component={QuestionPage} options={{headerTitle: 'ZistAI',headerTintColor: 'transparent', headerStyle:{backgroundColor: '#77BFA3'}}} />

          <Stack.Screen name='CoursePage' component={CoursePage} options={{headerTitle: 'ZistAI',headerTintColor: 'transparent', headerStyle:{backgroundColor: '#77BFA3'}}} />

          <Stack.Screen name='MainPage' component={MainPage} options={{headerTitle: 'ZistAI',headerTintColor: 'transparent', headerStyle:{backgroundColor: '#77BFA3'}}} />


          <Stack.Screen name='EntryPage' component={EntryPage} />



          <Stack.Screen name='ListScreens' component={ListScreens} options={{title: 'Welcome', headerStyle: {backgroundColor: '#80BCBD'}}} />



          <Stack.Screen name='LoginFormPage' component={LoginFormPage} options={{headerTitle: 'ورود',headerTintColor: '#16292A', headerStyle:{backgroundColor: '#eef6f6'}}} />
          <Stack.Screen name='LoginPage' component={LoginPage} />
          {/* <Stack.Screen name='LoginPage' component={LoginPage} /> */}
        </Stack.Navigator>
      </NavigationContainer>
    </View>
  );
}


