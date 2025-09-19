import React from 'react';
import { View } from 'react-native';
import AppNavigator from './navigation/AppNavigator';

export default function App() {
  return (
    <View style={{ flex: 1, maxWidth: 750, marginHorizontal: 'auto' }}>
      <AppNavigator />
    </View>
  );
}
