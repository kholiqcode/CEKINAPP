import { ImageStyle, StyleSheet, TextStyle, ViewStyle } from 'react-native';
import { BLACK, FONT_BOLD, FONT_REGULAR } from '../../theme';

type Style = {
  container: ViewStyle;
  textAppName: TextStyle;
  textAppDesc: TextStyle;
  imageAppLogo: ImageStyle;
};

const styles = StyleSheet.create<Style>({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  textAppName: {
    color: BLACK,
    marginTop: 12,
    ...FONT_BOLD(30),
  },
  textAppDesc: {
    color: BLACK,
    marginTop: 24,
    ...FONT_REGULAR(16),
  },
  imageAppLogo: {
    width: 200,
    height: 200,
  },
});

export default styles;
