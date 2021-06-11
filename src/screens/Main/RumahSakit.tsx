import React from 'react';
import { Image } from 'react-native';
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import { DummyHospital1, ILBgHospital } from '../../assets';
import { Gap, Input, MainContainer, Button, CardHospital } from '../../components';
import { color, FONT_BOLD, FONT_MEDIUM, FONT_REGULAR } from '../../theme';
import Icon from 'react-native-vector-icons/FontAwesome5';

const RumahSakit = () => {
  return (
    <MainContainer>
      <View
        style={{
          flex: 1,
          backgroundColor: color.white,
          borderBottomRightRadius: 30,
          borderBottomLeftRadius: 30,
        }}
      >
        <ImageBackground
          source={ILBgHospital}
          style={{ height: 240, paddingTop: 30, paddingHorizontal: 10 }}
        >
          <Text
            style={{
              ...FONT_BOLD(24),
              color: color.white,
              textAlign: 'center',
            }}
          >
            RUMAH SAKIT RUJUKAN
          </Text>
          <Gap height={20} />
          <Input
            iconLeft="search"
            placeholder="Cari Kabupaten/Kota"
            returnKeyType="search"
          />
        </ImageBackground>
        <View style={{ paddingHorizontal: 10, flex: 1 }}>
          <CardHospital />
          <CardHospital />
          <CardHospital />
        </View>
      </View>
    </MainContainer>
  );
};

export default RumahSakit;

const styles = StyleSheet.create({});
