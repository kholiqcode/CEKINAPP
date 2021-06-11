import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { color, FONT_REGULAR } from '../../../theme';

const BottomTabItem: React.FC<{ title: any; active: any; onPress: any; onLongPress: any }> = ({
  title,
  active,
  onPress,
  onLongPress,
}) => {
  const IconItem = () => {
    if (title === 'Headlines') {
      return active ? (
        <Icon
          name="newspaper"
          size={24}
          style={{  alignSelf: 'center' }}
          color="#0BCAD4"
        />
      ) : (
        <Icon
          name="newspaper"
          size={24}
          style={{  alignSelf: 'center' }}
          color={color.white}
        />
      );
    }
    if (title === 'Hotline') {
      return active ? (
        <Icon
          name="phone-volume"
          size={24}
          style={{  alignSelf: 'center' }}
          color="#0BCAD4"
        />
      ) : (
        <Icon
          name="phone-volume"
          size={24}
          style={{  alignSelf: 'center' }}
          color={color.white}
        />
      );
    }
    if (title === 'Account') {
      return active ? (
        <Icon
          name="user"
          size={24}
          style={{  alignSelf: 'center' }}
          color="#0BCAD4"
          solid
        />
      ) : (
        <Icon
          name="user"
          size={24}
          style={{  alignSelf: 'center' }}
          color={color.white}
          solid
        />
      );
    }
    return active ? (
      <Icon
        name="home"
        size={24}
        style={{  alignSelf: 'center' }}
        color="#0BCAD4"
      />
    ) : (
      <Icon
        name="home"
        size={24}
        style={{ alignSelf: 'center' }}
        color={color.white}
      />
    );
  };
  return (
    <TouchableOpacity style={styles.container} onPress={onPress} onLongPress={onLongPress} >
      <IconItem />
      <Text style={styles.text(active)}>{title}</Text>
    </TouchableOpacity>
  );
};

export default BottomTabItem;

const styles = StyleSheet.create<any>({
  container: { alignItems: 'center' },
  text: (active: any) => ({
    ...FONT_REGULAR(10),
    color: active ? '#0BCAD4' : color.white,
    marginTop: 2,
  }),
});
