import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import { color, FONT_MEDIUM } from '../../../theme';

const Button: React.FC<{ childern?: any; onPress?: any; style?: any }> = ({
  children,
  onPress,
  style,
}) => {
  return (
    <TouchableOpacity
      style={{
        backgroundColor: color.primary,
        paddingVertical: 5,
        borderRadius: 10,
        ...style,
      }}
      onPress={onPress}
      activeOpacity={0.7}
    >
      <Text style={{ textAlign: 'center', ...FONT_MEDIUM(18), color: 'white' }}>
        {children}
      </Text>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({});
