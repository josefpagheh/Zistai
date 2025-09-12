import React from 'react';
import { StyleSheet, Text, View, ImageBackground, Image } from 'react-native';
import { COLORS, FONTS } from '../styles/theme';
import logo from '../assets/logo.png';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.primary,
  },
  imageBg: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoImage: {
    width: 100,
    height: 100,
  },
  logoText: {
    ...FONTS.h1,
    color: COLORS.white,
    marginTop: 15,
  },
});

export default class EntryPage extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <ImageBackground source={require('../assets/bg4.png')} resizeMode="cover" style={styles.imageBg}>
          <Image source={logo} resizeMode="contain" style={styles.logoImage} />
          <Text style={styles.logoText}>ZistAI</Text>
        </ImageBackground>
      </View>
    );
  }
}
