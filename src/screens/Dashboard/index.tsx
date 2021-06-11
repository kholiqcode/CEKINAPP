import React from 'react';
import { Dimensions, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { ILLogo } from '../../assets';
import { BoxContainer, Gap, Header, Input } from '../../components';
import { color, FONT_BOLD, FONT_MEDIUM, FONT_REGULAR } from '../../theme';

const Dashboard = () => {
  return (
    <BoxContainer>
      <Header title="CEK-IN" logo={ILLogo} subTitle="COVID ELECTRONIC INFORMATION" style={styles.header} />
      <ScrollView style={{ paddingHorizontal: 10 }}>
        <Gap height={20} />
        <Input placeholder="Masukkan lokasi anda" iconLeft="search" returnKeyType="search" />
        <Gap height={15} />
        <View style={styles.sectionLogin}>
          <Icon name="user-circle" size={24} color="#525252" />
          <Gap width={10} />
          <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
            <Text style={{ ...FONT_REGULAR(14) }}>Sudah Punya Akun?</Text>
            <Gap width={5} />
            <TouchableOpacity>
              <Text style={{ ...FONT_BOLD(14) }}>Login Sekarang</Text>
            </TouchableOpacity>
          </View>
        </View>
        <Gap height={15} />
        <View style={styles.sectionInfo}>
          <Icon name="exclamation-triangle" size={20} color="#525252" />
          <Gap width={10} />
          <View style={{ justifyContent: 'center' }}>
            <Text style={{ ...FONT_BOLD(14) }}>HINDARI KERUMUNAN</Text>
            <Text style={{ ...FONT_REGULAR(12) }}>
              Jaga jarak dimanapun harus lebih dari 1 meter
            </Text>
          </View>
        </View>
        <View style={styles.sectionZona}>
          <View style={{ flexDirection: 'row' }}>
            <Icon name="map-marked-alt" size={20} color="#525252" />
            <Gap width={10} />
            <Text style={{ ...FONT_REGULAR(14) }}>Daerah Kabupaten Jember</Text>
          </View>
          <Gap height={15} />
          <View style={{ flexDirection: 'row' }}>
            <Icon name="square-full" size={20} color="green" />
            <Gap width={10} />
            <Text style={{ ...FONT_REGULAR(14) }}>Merupakan lokasi dengan Zona Hijau</Text>
          </View>
        </View>
        <Gap height={10} />
        <View style={styles.sectionStatusCovid}>
          <Text style={{ textAlign: 'center', ...FONT_BOLD(16) }}>STATUS COVID19</Text>
          <Gap height={10} />
          <View style={styles.cardWrapper}>
            <View style={styles.cardStatusCovid}>
              <Text style={{ ...FONT_MEDIUM(14), color: color.white }}>1.594.722</Text>
              <Text style={{ ...FONT_MEDIUM(14), color: color.white }}>Terkonfirmasi</Text>
            </View>
            <View style={styles.cardStatusCovid}>
              <Text style={{ ...FONT_MEDIUM(14), color: color.white }}>107.297</Text>
              <Text style={{ ...FONT_MEDIUM(14), color: color.white }}>Dirawat</Text>
            </View>
          </View>
          <Gap height={15} />
          <View style={styles.cardWrapper}>
            <View style={styles.cardStatusCovid}>
              <Text style={{ ...FONT_MEDIUM(14), color: color.white }}>1.444.229</Text>
              <Text style={{ ...FONT_MEDIUM(14), color: color.white }}>Sembuh</Text>
            </View>
            <View style={styles.cardStatusCovid}>
              <Text style={{ ...FONT_MEDIUM(14), color: color.white }}>43.192</Text>
              <Text style={{ ...FONT_MEDIUM(14), color: color.white }}>Meninggal</Text>
            </View>
          </View>
        </View>
        <Gap height={15} />

        <Text style={{ textAlign: 'center', ...FONT_BOLD(16) }}>STATUS VAKSINASI</Text>
        <Gap height={10} />
        <View>
          <View style={styles.cardStatusVaksin}>
            <Text style={{ ...FONT_MEDIUM(14), color: color.white }}>Vaksin Dosis 1</Text>
            <Text style={{ ...FONT_MEDIUM(14), color: color.white }}>10.709.628</Text>
            <View style={{ backgroundColor: '#C4C4C4' }}>
              <Gap height={10} width="25.5%" style={{ backgroundColor: color.white }} />
            </View>
            <Text style={{ ...FONT_REGULAR(12), color: color.white }}>
              26,542 % dari 40.349.049 telah divaksin
            </Text>
            <Gap height={5} />
            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
              <Text style={{ ...FONT_REGULAR(12), color: color.white }}>Tenaga Kesehatan</Text>
              <Text style={{ ...FONT_REGULAR(12), color: color.white }}>99.69%</Text>
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
              <Text style={{ ...FONT_REGULAR(12), color: color.white }}>Lansia</Text>
              <Text style={{ ...FONT_REGULAR(12), color: color.white }}>10.10%</Text>
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
              <Text style={{ ...FONT_REGULAR(12), color: color.white }}>Petugas Publik</Text>
              <Text style={{ ...FONT_REGULAR(12), color: color.white }}>40.78%</Text>
            </View>
          </View>
          <Gap height={10} />
          <View style={styles.cardStatusVaksin}>
            <Text style={{ ...FONT_MEDIUM(14), color: color.white }}>Vaksin Dosis 2</Text>
            <Text style={{ ...FONT_MEDIUM(14), color: color.white }}>10.709.628</Text>
            <View style={{ backgroundColor: '#C4C4C4' }}>
              <Gap height={10} width="25.5%" style={{ backgroundColor: color.white }} />
            </View>
            <Text style={{ ...FONT_REGULAR(12), color: color.white }}>
              26,542 % dari 40.349.049 telah divaksin
            </Text>
            <Gap height={5} />
            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
              <Text style={{ ...FONT_REGULAR(12), color: color.white }}>Tenaga Kesehatan</Text>
              <Text style={{ ...FONT_REGULAR(12), color: color.white }}>99.69%</Text>
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
              <Text style={{ ...FONT_REGULAR(12), color: color.white }}>Lansia</Text>
              <Text style={{ ...FONT_REGULAR(12), color: color.white }}>10.10%</Text>
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
              <Text style={{ ...FONT_REGULAR(12), color: color.white }}>Petugas Publik</Text>
              <Text style={{ ...FONT_REGULAR(12), color: color.white }}>40.78%</Text>
            </View>
          </View>
        </View>
        <Gap height={15} />
      </ScrollView>
    </BoxContainer>
  );
};

export default Dashboard;

const styles = StyleSheet.create({
  header: { paddingHorizontal: 10, paddingTop: 15 },
  sectionInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    backgroundColor: color.warning,
    borderRadius: 5,
  },
  sectionLogin: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    backgroundColor: color.line,
    borderRadius: 5,
  },
  sectionZona: {
    justifyContent: 'center',
    padding: 10,
  },
  sectionStatusCovid: {},
  cardWrapper: { flexDirection: 'row', justifyContent: 'space-around' },
  cardStatusCovid: {
    backgroundColor: color.primary,
    paddingHorizontal: 20,
    paddingVertical: 10,
    width: Dimensions.get('window').width / 2.5,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cardStatusVaksin: {
    backgroundColor: color.primary,
    paddingHorizontal: 20,
    paddingVertical: 10,
    marginHorizontal: 10,
    borderRadius: 5,
    justifyContent: 'center',
  },
});
