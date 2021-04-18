import { TextStyle } from 'react-native';
import { color } from '../color';
import { FONT_FAMILY, FONT_SIZE, FONT_WEIGHT } from '../font';
import { scaleFont } from '../mixin';

// FONT STYLE

export const FONT_LIGHT = (size = FONT_SIZE[12]): TextStyle => ({
  fontSize: scaleFont(size),
  fontFamily: FONT_FAMILY['LIGHT'],
  fontWeight: FONT_WEIGHT['LIGHT'],
});

export const FONT_REGULAR = (size = FONT_SIZE[12]): TextStyle => ({
  color: color.primary,
  fontSize: scaleFont(size),
  fontFamily: FONT_FAMILY['REGULAR'],
  fontWeight: FONT_WEIGHT['REGULAR'],
});

export const FONT_MEDIUM = (size = FONT_SIZE[12]): TextStyle => ({
  color: color.primary,
  fontSize: scaleFont(size),
  fontFamily: FONT_FAMILY['MEDIUM'],
  fontWeight: FONT_WEIGHT['MEDIUM'],
});

export const FONT_BOLD = (size = FONT_SIZE[12]): TextStyle => ({
  color: color.primary,
  fontSize: scaleFont(size),
  fontFamily: FONT_FAMILY['BOLD'],
  fontWeight: FONT_WEIGHT['BOLD'],
});
