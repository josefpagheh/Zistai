import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Pressable, SafeAreaView, Image } from 'react-native';
import logo from '../assets/logo.png';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E9F5E9',
  },
  centerdContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logoConatainer: {
    alignItems: 'center',
  },
  logoImage: {
    width: 60,
    height: 60,
  },
  logoText: {
    marginTop: 1,
    color: '#2E403B',
    fontSize: 26,
    fontWeight: '500',
  },
  illustrationImage: {
    flex: 1,
    width: '100%',
  },
  playGround: {
    backgroundColor: '#fff',
    padding: 20,
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
  },
  h1: {
    color: '#2E403B',
    fontSize: 26,
    paddingBottom: 15,
    textAlign: 'center',
  },
  shadeText: {
    color: 'rgba(46, 64, 59, 0.5)',
    fontSize: 16,
    lineHeight: 20,
    textAlign: 'center',
    paddingBottom: 25,
  },
  button: {
    width: '100%',
    alignItems: 'center',
    paddingVertical: 18,
    borderRadius: 20,
    marginBottom: 18,
  },
  buttonText: {
    fontSize: 16,
    color: '#fff',
  },
});

export default class LoginPage extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <StatusBar style="auto" />
        <SafeAreaView style={{ flex: 1 }}>
          <View style={styles.centerdContainer}>
            <View style={styles.logoConatainer}>
              <Image source={logo} resizeMode='contain' style={styles.logoImage} />
              <Text style={styles.logoText}>ZistAI</Text>
            </View>
            <Image source={require('../assets/Illustration.png')} resizeMode='contain' style={styles.illustrationImage} />
          </View>
          <View style={styles.playGround}>
            <View style={{ alignItems: 'center', padding: 15, width: '100%' }} >
              <Text style={styles.h1}>{'ورود یا ثبت نام'}</Text>
              <Text style={styles.shadeText}>{'ثبت نام کنید یا وارد اکانت خود شوید\n و در این ماجراجویی همراه ما باشید. '}</Text>
              <Pressable style={[styles.button, { backgroundColor: '#6AC46A' }]}>
                <Text style={styles.buttonText}>{'ورود به حساب کاربری'}</Text>
              </Pressable>
              <Pressable style={[styles.button, { backgroundColor: '#A2D9A2' }]} title='ساخت حساب'>
                <Text style={[styles.buttonText, { color: '#fff' }]}>{'ساخت حساب'}</Text>
              </Pressable>
              <Pressable style={[styles.button, { paddingVertical: 0, }]} title='بعدا'>
                <Text style={[styles.buttonText, { color: '#2E403B', marginBottom: 0, }]}>{'بعدا'}</Text>
              </Pressable>
            </View>
          </View>
        </SafeAreaView>
      </View>
    );
  }
}
