import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faClose, faStopwatch } from '@fortawesome/free-solid-svg-icons';
import { COLORS, SIZES, FONTS, SPACING } from '../styles/theme';

const styles = StyleSheet.create({
  container: {
    padding: SPACING.lg,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  timerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: SPACING.sm,
  },
  timerText: {
    ...FONTS.body2,
    color: COLORS.white,
  },
  progressText: {
    ...FONTS.h3,
    color: COLORS.white,
  },
});

const QuestionHeader = ({ progress, time }) => {
  return (
    <View style={styles.container}>
      <FontAwesomeIcon icon={faClose} size={24} color={COLORS.white} />
      <Text style={styles.progressText}>{progress}</Text>
      <View style={styles.timerContainer}>
        <FontAwesomeIcon icon={faStopwatch} size={24} color={COLORS.white} />
        <Text style={styles.timerText}>{time}</Text>
      </View>
    </View>
  );
};

export default QuestionHeader;
