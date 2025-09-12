import React from 'react';
import { View, StyleSheet } from 'react-native';
import { COLORS } from '../styles/theme';

const styles = StyleSheet.create({
  container: {
    height: 10,
    width: '100%',
    backgroundColor: COLORS.gray,
    borderRadius: 5,
    overflow: 'hidden',
  },
  progressBar: {
    height: '100%',
    backgroundColor: COLORS.success,
  },
});

const ProgressBar = ({ progress }) => {
  return (
    <View style={styles.container}>
      <View style={[styles.progressBar, { width: `${progress}%` }]} />
    </View>
  );
};

export default ProgressBar;
