import React from 'react';
import {
  Image,
  ImageStyle,
  StyleSheet,
  Text,
  TextStyle,
  View,
  ViewStyle,
  TouchableOpacity,
} from 'react-native';
import { ILLogo } from '../../../assets';
import { Gap } from '../../../components';
import { color, FONT_BOLD, FONT_LIGHT } from '../../../theme';
import Icon from 'react-native-vector-icons/FontAwesome5';

const Header: React.FC<{
  style?: ViewStyle;
  title?: any;
  subTitle?: any;
  profile?: any;
  logo?: any;
  back?: any;
  onPress?: any;
}> = ({ style, title, subTitle, profile, logo, back, onPress }) => {
  return (
    <View style={{ ...styles.container, ...style }}>
      {back ? (
        <TouchableOpacity activeOpacity={0.5} onPress={onPress}>
          <Icon name="arrow-left" size={24} color={color.primary} />
        </TouchableOpacity>
      ) : (
        <Image source={logo} style={styles.logo(profile)} />
      )}

      <Gap width={profile ? 15 : 20} />
      <View>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.subTitle}>{subTitle}</Text>
      </View>
    </View>
  );
};

export default Header;

type Style = {
  container: any;
  logo: any;
  title: TextStyle;
  subTitle: TextStyle;
};

const styles = StyleSheet.create<Style>({
  container: { flexDirection: 'row', alignItems: 'center' },
  logo: (profile: any) => ({
    width: 50,
    height: 50,
    borderRadius: profile ? 50 / 2 : 0,
  }),
  title: {
    ...FONT_BOLD(20),
  },
  subTitle: {
    ...FONT_LIGHT(12),
  },
});
