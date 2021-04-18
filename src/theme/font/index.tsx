import { scaleFont } from '../mixin';

// FONT FAMILY
export const FONT_FAMILY = {
  LIGHT: 'Poppins-Light',
  REGULAR: 'Poppins-Regular',
  MEDIUM: 'Poppins-Medium',
  BOLD: 'Poppins-Bold',
};

// FONT WEIGHT
export const FONT_WEIGHT: any = {
  LIGHT: '300',
  REGULAR: '400',
  MEDIUM: '500',
  BOLD: '700',
};

// FONT SIZE
export const FONT_SIZE = {
  20: scaleFont(20),
  18: scaleFont(18),
  16: scaleFont(16),
  14: scaleFont(14),
  12: scaleFont(12),
};

// LINE HEIGHT
export const LINE_HEIGHT_24 = scaleFont(24);
export const LINE_HEIGHT_20 = scaleFont(20);
export const LINE_HEIGHT_16 = scaleFont(16);
