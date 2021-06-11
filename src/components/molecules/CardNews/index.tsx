import React from 'react';
import { Image } from 'react-native';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { DummyNews1 } from '../../../assets';
import { color, FONT_MEDIUM, FONT_REGULAR } from '../../../theme';
import { Gap } from '../../atoms';

const CardNews = () => {
  return (
    <TouchableOpacity style={styles.cardNews} activeOpacity={0.7}>
      <View style={{ width: '80%' }}>
        <Text style={{ ...FONT_MEDIUM(14) }}>
          Sudah di vaksin,perlu kah tes COVID-19 lagi?
        </Text>
        <Gap height={5} />
        <Text style={{ ...FONT_REGULAR(14), color: color.dim }}>Today</Text>
      </View>
      <View>
        <Image
          source={DummyNews1}
          style={{ width: 80, height: 60, borderRadius: 10 }}
        />
      </View>
    </TouchableOpacity>
  );
};

export default CardNews;

const styles = StyleSheet.create({
  cardNews: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 10,
  },
});
