import React from 'react';
import { View, Button, SafeAreaView } from 'react-native';

const TestMenu = ({ navigation }) => {
  return (
    <SafeAreaView>
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#eef6f6' }}>
        <View style={{ padding: 20, rowGap: 20 }}>
          <Button title="Entry Page" onPress={() => navigation.navigate('EntryPage')} />
          <Button title="Login Page" onPress={() => navigation.navigate('LoginPage')} />
          <Button title="Login Form Page" onPress={() => navigation.navigate('LoginFormPage')} />
          <Button title="Main Page" onPress={() => navigation.navigate('MainPage')} />
          <Button title="Course Page" onPress={() => navigation.navigate('CoursePage')} />
          <Button title="Question Page" onPress={() => navigation.navigate('QuestionPage')} />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default TestMenu;
