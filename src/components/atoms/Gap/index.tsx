import React from 'react';
import { StyleSheet, View, ViewStyle } from 'react-native';

const Gap: React.FC<{ height?: any; width?: any; style?: Object }> = ({ height, width, style }) => (
  <View style={[styles.container, { ...style, height, width }]} />
);

export default Gap;

type Style = {
  container: ViewStyle;
};

const styles = StyleSheet.create<Style>({
  container: {},
});
