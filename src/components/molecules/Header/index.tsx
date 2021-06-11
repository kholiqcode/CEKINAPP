import React from 'react';
import { Image, ImageStyle, StyleSheet, Text, TextStyle, View, ViewStyle } from 'react-native';
import { ILLogo } from '../../../assets';
import { Gap } from '../../../components';
import { FONT_BOLD, FONT_LIGHT } from '../../../theme';

const Header: React.FC<{
  style?: ViewStyle;
  title?: any;
  subTitle?: any;
  profile?: any;
  logo?: any;
}> = ({ style, title, subTitle, profile, logo }) => {
  return (
    <View style={{ ...styles.container, ...style }}>
      <Image source={logo} style={styles.logo(profile)} />
      <Gap width={profile ? 15 : 5} />
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
  logo: (profile: any) => ({ width: 50, height: 50, borderRadius: 50 / 2 }),
  title: {
    ...FONT_BOLD(20),
  },
  subTitle: {
    ...FONT_LIGHT(12),
  },
});
