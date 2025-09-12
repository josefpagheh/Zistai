import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faCirclePlay, faSun } from '@fortawesome/free-solid-svg-icons';
import { COLORS, SIZES, FONTS, SPACING } from '../styles/theme';
import profileImage from '../assets/logo.png';

const styles = StyleSheet.create({
  headerContainer: {
    padding: SPACING.lg,
  },
  profileContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  profileImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  profileMessageContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
    gap: SPACING.sm,
  },
  profileMessage: {
    ...FONTS.body2,
    color: COLORS.white,
  },
  profileName: {
    ...FONTS.h1,
    color: COLORS.white,
    textAlign: 'right',
    marginTop: SPACING.sm,
    marginBottom: SPACING.lg,
  },
  clickToGo: {
    backgroundColor: COLORS.primaryDark,
    borderRadius: SIZES.radius,
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: 100,
    overflow: 'hidden',
  },
  clickToGoDetails: {
    padding: SPACING.md,
    justifyContent: 'center',
  },
  clickToGoTitle: {
    ...FONTS.body2,
    color: COLORS.white,
    textAlign: 'right',
  },
  clickToGoCategory: {
    ...FONTS.h2,
    color: COLORS.white,
    textAlign: 'right',
  },
  clickToGoIconContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.1)',
    width: 100,
    height: 100,
  },
});

const Header = ({ name }) => {
  return (
    <View style={styles.headerContainer}>
      <View style={styles.profileContainer}>
        <Image source={profileImage} resizeMode="contain" style={styles.profileImage} />
        <View>
          <View style={styles.profileMessageContainer}>
            <Text style={styles.profileMessage}>صبحت بخیر!</Text>
            <FontAwesomeIcon icon={faSun} color={COLORS.white} />
          </View>
          <Text style={styles.profileName}>{name}</Text>
        </View>
      </View>
      <View style={styles.clickToGo}>
        <View style={styles.clickToGoIconContainer}>
          <FontAwesomeIcon icon={faCirclePlay} size={48} color={COLORS.white} />
        </View>
        <View style={styles.clickToGoDetails}>
          <Text style={styles.clickToGoTitle}>بزن بریم!</Text>
          <Text style={styles.clickToGoCategory}>{'آنمی همولیتیک'}</Text>
        </View>
      </View>
    </View>
  );
};

export default Header;
