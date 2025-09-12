import React from 'react';
import { StatusBar } from 'expo-status-bar';
import {ImageBackground, StyleSheet, Text, View, Pressable, TextInput, SafeAreaView, ScrollView, Dimensions, Image } from 'react-native';
import logo from '../assets/logo.png';
const screen = Dimensions.get('window');
const playGroundSize = screen.height * .8;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#ebf4f4',
    backgroundColor: '#eef6f6'
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
    // backgroundColor: '#000000c0',
  
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
    // fontWeight: 700,
    color: '#fff'
  },
  textInput: {
    backgroundColor: '#fff',
    padding: 15, 
    textAlign: 'right', 
    borderRadius: 20,
    marginBottom: 15,
},
inputTitle: {
    textAlign: 'right',
    marginBottom: 10,
    // marginRight: 15,
    color: '#16292A',
    fontSize: 16,
}


});

export default class LoginFormPage extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <ImageBackground source={require('../assets/bg4.png')} resizeMode="cover" style={[styles.imageBg]} >
          <SafeAreaView style={{flex: 1}}>
            {/* <View style={styles.playGround}> */}
              <View style={{justifyContent:'flex-start', padding: 15,flex: 1,}} >
                <View style={{width: '100%', marginTop: 20}}>
                    <Pressable style={[styles.button, {backgroundColor: '#fff',borderColor: '#e6e6e6', borderWidth: 1,}]}>
                    <Text style={[styles.buttonText, , {color: '#16292A'}]}>{'ورود به حساب کاربری'}</Text>
                    </Pressable>
                    <Pressable style={[styles.button, {backgroundColor: '#80BCBD'}]} title='ساخت حساب'>
                    <Text style={[styles.buttonText]}>{'ساخت حساب'}</Text>
                    </Pressable>
                </View>

                <View style={{flexDirection: 'row', alignItems: 'center',  marginVertical: 20}}>
                    <View style={{flex: 1, height: 1, backgroundColor: '#e6e6e6'}} />
                    <View>
                        <Text style={{paddingHorizontal: 7, textAlign: 'center', color: '#848484'}}>یا هم</Text>
                    </View>
                    <View style={{flex: 1, height: 1, backgroundColor: '#e6e6e6'}} />
                </View>

                <View style={{width: '100%',}}>
                    <Text style={styles.inputTitle}>{'ایمیل :'}</Text>
                    <TextInput 
                    placeholder="ایمیل خود را وارد کنید."
                    style={styles.textInput}
                    placeholderTextColor={'translucent'}

                    />
                    <Text style={styles.inputTitle}>{'رمزعبور :'}</Text>
                    <TextInput
                    secureTextEntry={true}
                    placeholder="رمز عبور خود را وارد کنید."
                    placeholderTextColor={'translucent'}
                    style={styles.textInput}
                    />
                    <Pressable style={[styles.button, {backgroundColor: '#80BCBD', marginTop: 15,}]} title='ساخت حساب'>
                        <Text style={[styles.buttonText]}>{'ورود به حساب'}</Text>
                    </Pressable>
                    <Pressable style={[styles.button, {paddingVertical: 5, marginBottom: 20}]}>
                        <Text style={[styles.buttonText, {color: '#519b9c', marginBottom: 0,}]}>{'فراموشی رمزعبور؟'}</Text>
                    </Pressable>
                </View>



            </View> 
            {/* </View> */}
          </SafeAreaView>
        </ImageBackground>

      </View>
    );
  }

}

// export default entryPage;
