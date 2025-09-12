import React from 'react';
import { StatusBar } from 'expo-status-bar';
import {ImageBackground, StyleSheet, Text, View, Pressable, SafeAreaView, ScrollView, Dimensions, Image } from 'react-native';
import logo from '../assets/logo.png';
const screen = Dimensions.get('window');
const playGroundSize = screen.height * .8;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#80BCBD',
    backgroundColor: '#77BFA3'
  },
  imageBg: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  text: {
    color: 'white',
    fontSize: 42,
    lineHeight: 84,
    fontWeight: 'bold',
    textAlign: 'center',
    backgroundColor: '#000000c0',
  
  },
  playGround: {
    backgroundColor: '#f5f5f5',
    // flex: 1,
    // height: screen.height * .45  ,
    // minHeight: 150,
    // height: 150,

    justifyContent: 'center',
    alignItems: 'center',
    // marginTop: 0,
    marginHorizontal: 15,
    marginBottom: 15,
    borderRadius: 20,
  },
  logoConatainer: {
    // justifyContent: 'center',
    alignItems: 'center',
    
  },
  logoImage: {
    width: 60,
    height: 60,
    // backgroundColor: '#fff'
  },
  logoText: { 
      marginTop: 1,
      color: '#fff',
      fontSize: 26,
      fontWeight: 500,
      // fontFamily: 'Nunito'
  },
  centerdContainer: {
    // justifyContent: 'flex-start',

    flex: 1,
    // height: screen.height *.5,
    // marginTop: 0,
    // paddingTop: 50,
    alignItems: 'center'
  },
  IllustrationContainer: {
    // flexGrow: 1,
    // backgroundColor: '#555',

    // width: '100%',
    flex: 1,
    // height: '100%',
  },
  illustrationImage: {
    flex: 1,
    width: '100%',
    // height: undefined,
  },
  h1: {
    color: '#16292A',
    fontSize: 26, 
    paddingBottom: 15
  },
  shadeText: {
    color: '#81887D',
    fontSize: 16,
    lineHeight: 20,
    textAlign: 'center',
    paddingBottom: 25,
  },
  button: {
    width: '100%',
    // backgroundColor: '#80BCBD',
    alignItems: 'center',
    paddingVertical: 18,
    borderRadius: 20,
    marginBottom: 18,
  },
  buttonText: {
    fontSize: 16,
    color: '#fff'
  }


});

export default class LoginPage extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <ImageBackground source={require('../assets/bg4.png')} resizeMode="cover" style={[styles.imageBg]} >
          <SafeAreaView style={{flex: 1}}>
            <View style={styles.centerdContainer}>
              <View style={styles.logoConatainer}>
                <Image source={logo} resizeMode='contain' style={styles.logoImage} />
                <Text style={styles.logoText}>زیستآی</Text>
              </View>
              {/* <View style={styles.IllustrationContainer}> */}
                <Image source={require('../assets/Illustration.png')} resizeMode='contain' style={styles.illustrationImage} />
              {/* </View> */}
            </View>
            <View style={styles.playGround}>
              <View style={{alignItems:'center', padding: 15,width: '100%'}} >
                <Text style={styles.h1}>{'ورود یا ثبت نام'}</Text>
                <Text style={styles.shadeText}>{'ثبت نام کنید یا وارد اکانت خود شوید\n و در این ماجراجویی همراه ما باشید. '}</Text>
                <Pressable style={[styles.button, {backgroundColor: '#80BCBD'}]}>
                  <Text style={styles.buttonText}>{'ورود به حساب کاربری'}</Text>
                </Pressable>
                <Pressable style={[styles.button, {backgroundColor: '#E6E6E6'}]} title='ساخت حساب'>
                  <Text style={[styles.buttonText, {color: '#16292A'}]}>{'ساخت حساب'}</Text>
                </Pressable>
                <Pressable style={[styles.button, {paddingVertical: 0,}]} title='بعدا'>
                  <Text style={[styles.buttonText, {color: '#81887D', marginBottom: 0,}]}>{'بعدا'}</Text>
                </Pressable>

              </View> 
            </View>
          </SafeAreaView>
        </ImageBackground>

      </View>
    );
  }

}

// export default entryPage;
