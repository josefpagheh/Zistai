import React from 'react';
import { View, Button, SafeAreaView, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E9F5E9',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonContainer: {
    padding: 20,
    rowGap: 20,
    width: '80%',
  },
});

const TestMenu = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.buttonContainer}>
        <Button title="Entry Page" onPress={() => navigation.navigate('EntryPage')} color="#6AC46A" />
        <Button title="Login Page" onPress={() => navigation.navigate('LoginPage')} color="#6AC46A" />
        <Button title="Login Form Page" onPress={() => navigation.navigate('LoginFormPage')} color="#6AC46A" />
        <Button title="Main Page" onPress={() => navigation.navigate('MainPage')} color="#6AC46A" />
        <Button title="Course Page" onPress={() => navigation.navigate('CoursePage')} color="#6AC46A" />
        <Button title="Question Page" onPress={() => navigation.navigate('QuestionPage')} color="#6AC46A" />
      </View>
    </SafeAreaView>
  );
};

export default TestMenu;
