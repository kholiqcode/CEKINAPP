import React from 'react';
import { StyleSheet, View } from 'react-native';
import { color } from '../../../theme';

const BoxContainer: React.FC<{ style?: any; children: any }> = ({ style, children }) => {
  return <View style={{ ...styles.container, ...style }}>{children}</View>;
};

export default BoxContainer;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: color.background,
  },
});
