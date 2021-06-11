import React from 'react';
import { Dimensions, Image } from 'react-native';
import { TouchableOpacity } from 'react-native';
import { StyleSheet, Text, View } from 'react-native';
import { DummyHospital1 } from '../../../assets';
import { color, FONT_MEDIUM, FONT_REGULAR } from '../../../theme';
import { Gap } from '../../atoms';
import Icon from 'react-native-vector-icons/FontAwesome5';

const CardHospital = () => {
  return (
    <View style={{ paddingHorizontal: 10 }}>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          paddingVertical: 10,
          borderBottomWidth: 1,
          borderBottomColor: '#EEEE',
          width: '100%',
        }}
      >
        <View style={{ flex: 1 }}>
          <Image
            source={DummyHospital1}
            style={{ width: 80, height: 60, borderRadius: 10 }}
          />
        </View>
        <View style={{ paddingHorizontal: 10, flex: 2 }}>
          <Text numberOfLines={2} style={{ ...FONT_MEDIUM(0.04*Dimensions.get('window').width) }}>RS Jember Klinik</Text>
          <View style={{ flexDirection: 'row' }}>
            <Icon name="phone" size={14} color={color.primary} />
            <Gap width={10} />
            <Text style={{ ...FONT_REGULAR(12) }}>Telp 0811 3510 033</Text>
          </View>
          <View style={{ flexDirection: 'row' }}>
            <Icon name="bed" size={14} color={color.primary} />
            <Gap width={10} />
            <Text style={{ ...FONT_REGULAR(12) }}>Kamar tersedia : 10</Text>
          </View>
        </View>
        <View style={{ flex: 1 }}>
          <TouchableOpacity
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              backgroundColor: '#EDEEF0',
              padding: 5,
              borderRadius: 5,
              paddingHorizontal: 10,
            }}
          >
            <Icon name="map" size={14} color={color.primary} />
            <Gap width={10} />
            <Text>Peta</Text>
          </TouchableOpacity>
          <Gap height={10} />
          <TouchableOpacity
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              backgroundColor: '#EDEEF0',
              padding: 5,
              borderRadius: 5,
              paddingHorizontal: 10,
            }}
          >
            <Icon name="check" size={14} color={color.primary} />
            <Gap width={10} />
            <Text>Check</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default CardHospital;

const styles = StyleSheet.create({});
