import React from 'react';
import { Image } from 'react-native';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { DummyUser1 } from '../../assets';
import { MainContainer, Button, Gap } from '../../components';
import { color, FONT_MEDIUM, FONT_REGULAR } from '../../theme';

const Account = () => {
  return (
    <MainContainer>
      <ScrollView
        style={{
          borderBottomLeftRadius: 30,
          borderBottomRightRadius: 30,
          backgroundColor: color.white,
          paddingHorizontal:10,
          paddingTop:30
        }}
      >
        <View style={{ flex: 1, justifyContent: 'flex-end',alignItems:'center' }}>
          <View style={styles.imageWrapper}>
            <Image source={DummyUser1} style={styles.image} />
          </View>
          <Gap height={10}/>
          <Text style={styles.name}>Abdul Kholiq</Text>
          <Text style={styles.profession}>Mahasiswa</Text>
        </View>
        <View style={{paddingVertical:20,paddingHorizontal:10}}>
          <View style={styles.infoWrapper}>
            <Text style={styles.label}>Tempat Lahir</Text>
            <Text style={styles.info}>Jember</Text>
          </View>
          <View style={styles.infoWrapper}>
            <Text style={styles.label}>Tanggal Lahir</Text>
            <Text style={styles.info}>10 Juni 2020</Text>
          </View>
          <View style={styles.infoWrapper}>
            <Text style={styles.label}>Golongan darah</Text>
            <Text style={styles.info}>A</Text>
          </View>
          <View style={styles.button}>
            <Button>Ubah Password</Button>
            <Gap height={20}/>
            <Button>Ubah Profil</Button>
          </View>
        </View>
      </ScrollView>
    </MainContainer>
  );
};

export default Account;

const styles = StyleSheet.create({
  infoWrapper: {
    paddingBottom: 16,
    marginBottom: 16,
    borderBottomWidth:1,
    borderBottomColor:color.dim
  },
  label: {
    ...FONT_MEDIUM(14),
  },
  info: {
    ...FONT_REGULAR(14),
  },
  button: {
    paddingHorizontal: 20,
  },
  imageWrapper: {
    height: 130,
    width: 130,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 130 / 2,
    borderWidth: 2,
    borderColor: color.primary,
  },
  image: {
    width: 110,
    height: 110,
    borderRadius: 110 / 2,
  },
  name: {
    ...FONT_REGULAR(16),
  },
  profession: {
    ...FONT_REGULAR(16),
    marginTop: 2,
  },
});
