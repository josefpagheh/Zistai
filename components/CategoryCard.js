import React from 'react';
import { View, Text, Image, StyleSheet, Dimensions } from 'react-native';
import { COLORS, SIZES, FONTS, SPACING } from '../styles/theme';
import profileImage from '../assets/logo.png';

const screen = Dimensions.get('window');

const styles = StyleSheet.create({
  category: {
    width: (screen.width - 30) * 0.45,
    height: (screen.width - 30) * 0.45,
    maxWidth: 150,
    maxHeight: 150,
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
  categoryImage: {
    width: 50,
    height: 50,
  },
  categoryName: {
    ...FONTS.h3,
    color: COLORS.primaryDark,
  },
  categorySubCount: {
    ...FONTS.caption,
    color: COLORS.darkGray,
  },
});

const CategoryCard = ({ category }) => {
  return (
    <View style={styles.category}>
      <Image source={profileImage} resizeMode="contain" style={styles.categoryImage} />
      <Text style={styles.categoryName}>{category.name}</Text>
      <Text style={styles.categorySubCount}>{category.chapters_count} درس</Text>
    </View>
  );
};

export default CategoryCard;
