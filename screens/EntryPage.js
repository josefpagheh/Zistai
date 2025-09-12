import React from 'react';
import { StatusBar } from 'expo-status-bar';
import {ImageBackground, StyleSheet, Text, View, SafeAreaView, ScrollView, Dimensions, Image } from 'react-native';
import logo from '../assets/logo.png';
const screen = Dimensions.get('window');
const playGroundSize = screen.height * .8;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    // maxWidth: 750,
    // marginHorizontal: 'auto',
    backgroundColor: '#80BCBD',
    backgroundColor: '#77BFA3'
  },
  imageBg: {
    flex: 1,
    justifyContent: 'flex-end',
    // width: '100%',
    // height: '100%',
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
    height: screen.height * .8  ,
    justifyContent: 'center',
    alignContent: 'center',
    // marginTop: 0,
    marginHorizontal: 15,
    // marginBottom: 15,
    borderRadius: 20,
  },
  logoImage: {
    width: screen.width * .25,
    height: screen.width * .25,
    // backgroundColor: '#fff'
  },
  logoText: {
      marginTop: 15,
      color: '#fff',
      fontSize: 36,
      fontWeight: 700,
      // fontFamily: 'Nunito'
  },
  entryContainer: {
    justifyContent: 'center',
    flex: 1,
    alignItems: 'center'
  },

});

export default class EntryPage extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <ImageBackground source={require('../assets/bg4.png')} resizeMode="cover" style={[styles.imageBg]} >
          <View style={styles.entryContainer}>
            <Image source={logo} resizeMode='contain' style={styles.logoImage} />
            <Text style={styles.logoText}>ZistAI</Text>
          </View>
        </ImageBackground>
      </View>
    );
  }

}

// export default entryPage;
