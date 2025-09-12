import React, { useState } from 'react';
import { StyleSheet, Text, View, Pressable, TextInput, ImageBackground, Image, SafeAreaView } from 'react-native';
import { COLORS, FONTS, SPACING } from '../styles/theme';
import logo from '../assets/logo.png';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.primary,
  },
  imageBg: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  playGround: {
    backgroundColor: COLORS.secondary,
    flex: 1,
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
    padding: SPACING.lg,
  },
  logoContainer: {
    alignItems: 'center',
    marginBottom: SPACING.xl,
  },
  logoImage: {
    width: 60,
    height: 60,
  },
  logoText: {
    ...FONTS.h2,
    color: COLORS.primaryDark,
    marginTop: SPACING.sm,
  },
  tabsContainer: {
    flexDirection: 'row',
    marginBottom: SPACING.lg,
  },
  tab: {
    flex: 1,
    paddingVertical: SPACING.md,
    alignItems: 'center',
    borderBottomWidth: 2,
    borderBottomColor: 'transparent',
  },
  activeTab: {
    borderBottomColor: COLORS.primary,
  },
  tabText: {
    ...FONTS.h3,
    color: COLORS.darkGray,
  },
  activeTabText: {
    color: COLORS.primary,
  },
  formContainer: {
    gap: SPACING.md,
  },
  inputTitle: {
    ...FONTS.body2,
    color: COLORS.primaryDark,
    textAlign: 'right',
  },
  textInput: {
    backgroundColor: COLORS.white,
    padding: SPACING.md,
    textAlign: 'right',
    borderRadius: SPACING.sm,
  },
  button: {
    backgroundColor: COLORS.primary,
    alignItems: 'center',
    paddingVertical: SPACING.md,
    borderRadius: SPACING.sm,
  },
  buttonText: {
    ...FONTS.button,
    color: COLORS.white,
  },
  forgotPassword: {
    ...FONTS.body2,
    color: COLORS.primary,
    textAlign: 'center',
  },
});

const AuthPage = () => {
  const [activeTab, setActiveTab] = useState('login');

  return (
    <View style={styles.container}>
      <ImageBackground source={require('../assets/bg4.png')} resizeMode="cover" style={styles.imageBg}>
        <SafeAreaView style={{ flex: 1 }}>
          <View style={styles.playGround}>
            <View style={styles.logoContainer}>
              <Image source={logo} resizeMode="contain" style={styles.logoImage} />
              <Text style={styles.logoText}>ZistAI</Text>
            </View>
            <View style={styles.tabsContainer}>
              <Pressable
                style={[styles.tab, activeTab === 'login' && styles.activeTab]}
                onPress={() => setActiveTab('login')}
              >
                <Text style={[styles.tabText, activeTab === 'login' && styles.activeTabText]}>ورود</Text>
              </Pressable>
              <Pressable
                style={[styles.tab, activeTab === 'signup' && styles.activeTab]}
                onPress={() => setActiveTab('signup')}
              >
                <Text style={[styles.tabText, activeTab === 'signup' && styles.activeTabText]}>ثبت نام</Text>
              </Pressable>
            </View>
            <View style={styles.formContainer}>
              <Text style={styles.inputTitle}>ایمیل :</Text>
              <TextInput placeholder="ایمیل خود را وارد کنید." style={styles.textInput} />
              <Text style={styles.inputTitle}>رمزعبور :</Text>
              <TextInput secureTextEntry={true} placeholder="رمز عبور خود را وارد کنید." style={styles.textInput} />
              {activeTab === 'signup' && (
                <>
                  <Text style={styles.inputTitle}>تکرار رمزعبور :</Text>
                  <TextInput secureTextEntry={true} placeholder="رمز عبور خود را تکرار کنید." style={styles.textInput} />
                </>
              )}
              <Pressable style={styles.button}>
                <Text style={styles.buttonText}>{activeTab === 'login' ? 'ورود به حساب' : 'ساخت حساب'}</Text>
              </Pressable>
              {activeTab === 'login' && (
                <Pressable>
                  <Text style={styles.forgotPassword}>فراموشی رمزعبور؟</Text>
                </Pressable>
              )}
            </View>
          </View>
        </SafeAreaView>
      </ImageBackground>
    </View>
  );
};

export default AuthPage;
