import React from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faCheck, faClose } from '@fortawesome/free-solid-svg-icons';
import { COLORS, SIZES, FONTS, SPACING } from '../styles/theme';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: SPACING.md,
    paddingVertical: SPACING.sm,
    height: 48,
    borderWidth: 2,
    borderRadius: SIZES.radius,
    borderColor: COLORS.gray,
    gap: SPACING.md,
  },
  text: {
    ...FONTS.body1,
    flex: 1,
    textAlign: 'right',
    color: COLORS.primaryDark,
  },
  correctContainer: {
    backgroundColor: COLORS.success,
    borderColor: COLORS.success,
  },
  correctText: {
    color: COLORS.white,
  },
  incorrectContainer: {
    borderColor: COLORS.error,
  },
  incorrectText: {
    color: COLORS.error,
  },
});

const AnswerOption = ({ answer, onPress, answered, isSelected }) => {
  const isCorrect = answer.correct;

  const getContainerStyle = () => {
    if (!answered) return styles.container;
    if (isCorrect) return [styles.container, styles.correctContainer];
    if (isSelected) return [styles.container, styles.incorrectContainer];
    return styles.container;
  };

  const getTextStyle = () => {
    if (!answered) return styles.text;
    if (isCorrect) return [styles.text, styles.correctText];
    if (isSelected) return [styles.text, styles.incorrectText];
    return styles.text;
  };

  const getIcon = () => {
    if (!answered) return null;
    if (isCorrect) return <FontAwesomeIcon icon={faCheck} size={24} color={COLORS.white} />;
    if (isSelected) return <FontAwesomeIcon icon={faClose} size={24} color={COLORS.error} />;
    return null;
  };

  return (
    <Pressable style={getContainerStyle()} onPress={() => onPress(answer)} disabled={answered}>
      {getIcon()}
      <Text style={getTextStyle()}>{answer.text}</Text>
    </Pressable>
  );
};

export default AnswerOption;
