import React from 'react';
import { StyleProp, StyleSheet, TextInput, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { color, FONT_MEDIUM } from '../../../theme';
import Gap from '../Gap';

const Input: React.FC<StyleProp<any>> = ({
  style,
  placeholder,
  returnKeyType,
  iconRight,
  iconLeft,
}) => {
  const iconStyle = iconRight ? 'row-reverse' : 'row';
  return (
    <View style={styles.container(iconStyle)}>
      {(iconRight || iconLeft) && <Icon name={iconRight ?? iconLeft} size={20} color="#525252" />}
      {(iconRight || iconLeft) && <Gap width={10} />}
      <TextInput
        style={{ ...styles.input, ...style }}
        placeholder={placeholder}
        placeholderTextColor={color.dim}
        returnKeyType={returnKeyType}
      />
    </View>
  );
};

export default Input;

const styles = StyleSheet.create<any>({
  container: (iconStyle: string) => ({
    alignItems: 'center',
    backgroundColor: '#F4F4F4',
    flexDirection: iconStyle,
    borderWidth: 1,
    borderColor: color.line,
    paddingHorizontal: 10,
    borderRadius: 5,
  }),
  input: {
    color: color.primary,
    ...FONT_MEDIUM(14),
    paddingTop: 0,
    paddingBottom: 0,
    height: 40,
    maxHeight: 40,
    flex: 1,
  },
});
