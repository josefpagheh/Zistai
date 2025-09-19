import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Pressable, TextInput, TouchableOpacity } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E9F5E9',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 32,
    color: '#2E403B',
    paddingBottom: 20,
  },
  formContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    padding: 20,
  },
  input: {
    backgroundColor: '#fff',
    width: '100%',
    padding: 15,
    borderRadius: 20,
    marginBottom: 20,
    textAlign: 'right',
    fontSize: 16,
    borderWidth: 1,
    borderColor: 'rgba(162, 217, 162, 0.4)',
  },
  button: {
    backgroundColor: '#6AC46A',
    width: '100%',
    padding: 20,
    borderRadius: 20,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
  backButton: {
    position: 'absolute',
    top: 60,
    right: 20,
  },
});

export default class LoginFormPage extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <StatusBar style="auto" />
        <TouchableOpacity style={styles.backButton}>
          <FontAwesomeIcon icon={faAngleLeft} size={32} color='#2E403B' />
        </TouchableOpacity>
        <Text style={styles.title}>خوش آمدید</Text>
        <View style={styles.formContainer}>
          <TextInput style={styles.input} placeholder='نام کاربری' />
          <TextInput style={styles.input} placeholder='رمز عبور' secureTextEntry={true} />
          <TouchableOpacity style={styles.button} onPress={() => this.props.setIsAuthenticated(true)}>
            <Text style={styles.buttonText}>ورود</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
