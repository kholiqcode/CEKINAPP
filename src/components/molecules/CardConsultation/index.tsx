import React from 'react';
import { Linking } from 'react-native';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { DummyUser2 } from '../../../assets';
import { color, FONT_MEDIUM, FONT_REGULAR } from '../../../theme';
import showMessage from '../../../utils/showMessage';
import { Gap } from '../../atoms';

const CardConsultation: React.FC<any> = ({ name, phone }) => {
  const openWhastapp = () => {
    let url =
      'whatsapp://send?text=Halo saya ingin berkonsultasi&phone=' + phone;
    Linking.openURL(url)
      .then((data) => {
        showMessage('WhatsApp Dibuka');
      })
      .catch(() => {
        showMessage('Whatsapp Tidak Terinstall di Perangkat Anda', 'error');
      });
  };
  return (
    <TouchableOpacity
      style={{ flexDirection: 'row', paddingVertical: 5 }}
      onPress={openWhastapp}
      activeOpacity={0.7}
    >
      <Image
        source={DummyUser2}
        style={{
          width: 50,
          height: 50,
          borderRadius: 50 / 2,
          borderWidth: 1,
          borderColor: color.dim,
        }}
      />
      <Gap width={10} />
      <View style={{ justifyContent: 'space-evenly' }}>
        <Text style={{ ...FONT_MEDIUM(16) }}>{name}</Text>
        <Text style={{ ...FONT_REGULAR(14) }}>{phone}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default CardConsultation;

const styles = StyleSheet.create({});
