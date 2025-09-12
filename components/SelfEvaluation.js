import React from 'react';
import { View, Pressable, StyleSheet } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faFaceLaughWink, faFaceSmile, faFaceDizzy } from '@fortawesome/free-regular-svg-icons';
import { COLORS, SPACING } from '../styles/theme';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    aspectRatio: 1.5,
    borderWidth: 1,
    borderColor: COLORS.gray,
  },
  leftButton: {
    width: '32%',
    borderBottomLeftRadius: 24,
    borderTopLeftRadius: 24,
    marginRight: '-8%',
    paddingRight: '4%',
  },
  middleButton: {
    width: '48%',
    borderWidth: 2,
    aspectRatio: 1,
    borderRadius: 999,
    backgroundColor: COLORS.white,
    zIndex: 2,
  },
  rightButton: {
    width: '32%',
    borderBottomRightRadius: 24,
    borderTopRightRadius: 24,
    marginLeft: '-8%',
    paddingLeft: '4%',
  },
});

const SelfEvaluation = ({ onSelect }) => {
  return (
    <View style={styles.container}>
      <Pressable style={[styles.button, styles.leftButton]} onPress={() => onSelect(1)}>
        <FontAwesomeIcon icon={faFaceLaughWink} size={50} color="#6583DA" />
      </Pressable>
      <Pressable style={[styles.button, styles.middleButton]} onPress={() => onSelect(2)}>
        <FontAwesomeIcon icon={faFaceSmile} size={'50%'} color={COLORS.success} />
      </Pressable>
      <Pressable style={[styles.button, styles.rightButton]} onPress={() => onSelect(3)}>
        <FontAwesomeIcon icon={faFaceDizzy} size={'50%'} color={COLORS.error} />
      </Pressable>
    </View>
  );
};

export default SelfEvaluation;
