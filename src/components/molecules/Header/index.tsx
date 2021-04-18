import React from 'react';
import { Image, ImageStyle, StyleSheet, Text, TextStyle, View, ViewStyle } from 'react-native';
import { ILLogo } from '../../../assets';
import { Gap } from '../../../components';
import { FONT_BOLD, FONT_LIGHT } from '../../../theme';

const Header: React.FC<{ style?: ViewStyle }> = ({ style }) => {
  return (
    <View style={{ ...styles.container, ...style }}>
      <Image source={ILLogo} style={styles.logo} />
      <Gap width={5} />
      <View>
        <Text style={styles.title}>CEK-IN</Text>
        <Text style={styles.subTitle}>COVID ELECTRONIC INFORMATION</Text>
      </View>
    </View>
  );
};

export default Header;

type Style = {
  container: any;
  logo: ImageStyle;
  title: TextStyle;
  subTitle: TextStyle;
};

const styles = StyleSheet.create<Style>({
  container: { flexDirection: 'row', alignItems: 'center' },
  logo: { width: 50, height: 50 },
  title: {
    ...FONT_BOLD(20),
  },
  subTitle: {
    ...FONT_LIGHT(12),
  },
});
