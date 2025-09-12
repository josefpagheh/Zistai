import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons';
import { COLORS, SIZES, FONTS, SPACING } from '../styles/theme';
import profileImage from '../assets/logo.png';

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
    backgroundColor: COLORS.white,
    borderRadius: SIZES.radius,
    padding: SPACING.md,
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: SPACING.md,
    shadowColor: COLORS.black,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 5,
  },
  detailsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: SPACING.md,
  },
  detailsText: {
    alignItems: 'flex-end',
    gap: SPACING.xs,
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  name: {
    ...FONTS.h3,
    color: COLORS.primaryDark,
  },
  count: {
    ...FONTS.caption,
    color: COLORS.darkGray,
  },
});

const ChapterCard = ({ chapter }) => {
  return (
    <View style={styles.container}>
      <FontAwesomeIcon icon={faAngleLeft} size={32} color={COLORS.primaryDark} />
      <View style={styles.detailsContainer}>
        <View style={styles.detailsText}>
          <Text style={styles.name}>{chapter.name}</Text>
          <Text style={styles.count}>{chapter.question_count} سوال</Text>
        </View>
        <Image source={profileImage} resizeMode="contain" style={styles.image} />
      </View>
    </View>
  );
};

export default ChapterCard;
