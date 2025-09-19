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
        <Button title="Entry Page" onPress={() => navigation.navigate('Entry')} color="#6AC46A" />
        <Button title="Login Page" onPress={() => navigation.navigate('Login')} color="#6AC46A" />
        <Button title="Login Form Page" onPress={() => navigation.navigate('LoginForm')} color="#6AC46A" />
        <Button title="Main Page" onPress={() => navigation.navigate('Main')} color="#6AC46A" />
        <Button title="Course Page" onPress={() => navigation.navigate('Courses')} color="#6AC46A" />
        <Button title="Question Page" onPress={() => navigation.navigate('Questions')} color="#6AC46A" />
      </View>
    </SafeAreaView>
  );
};

export default TestMenu;
