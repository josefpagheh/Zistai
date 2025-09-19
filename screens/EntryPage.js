import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import logo from '../assets/logo.png';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E9F5E9',
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoImage: {
    width: 150,
    height: 150,
  },
  logoText: {
    marginTop: 15,
    color: '#2E403B',
    fontSize: 36,
    fontWeight: '700',
  },
});

export default class EntryPage extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <StatusBar style="auto" />
        <Image source={logo} resizeMode='contain' style={styles.logoImage} />
        <Text style={styles.logoText}>ZistAI</Text>
      </View>
    );
  }
}
