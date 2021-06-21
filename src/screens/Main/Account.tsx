import React from 'react';
import { Image } from 'react-native';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  Button as Btn,
} from 'react-native';
import { DummyUser1, DummyUser2 } from '../../assets';
import { MainContainer, Button, Gap } from '../../components';
import { color, FONT_BOLD, FONT_MEDIUM, FONT_REGULAR } from '../../theme';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Modal from 'react-native-modal';
import { useState } from 'react';
import { removeData } from '../../utils';
import showMessage from '../../utils/showMessage';
import { RootStateOrAny, useSelector } from 'react-redux';

const Account: React.FC<any> = ({ navigation }) => {
  const { user } = useSelector((state: RootStateOrAny) => state.authReducer);
  const [visible, setVisible] = useState(false);
  return (
    <MainContainer>
      <ScrollView
        style={{
          borderBottomLeftRadius: 30,
          borderBottomRightRadius: 30,
          backgroundColor: color.white,
          paddingHorizontal: 10,
          paddingTop: 30,
        }}
      >
        <TouchableOpacity
          style={{ alignSelf: 'flex-end', flexDirection: 'row' }}
          onPress={() => setVisible(true)}
        >
          <Text
            style={{
              textAlignVertical: 'center',
              ...FONT_BOLD(16),
              color: 'red',
            }}
          >
            KELUAR
          </Text>
          <Gap width={5} />
          <Icon
            name="sign-out-alt"
            size={24}
            style={{ alignSelf: 'center' }}
            color="red"
          />
        </TouchableOpacity>
        <View
          style={{ flex: 1, justifyContent: 'flex-end', alignItems: 'center' }}
        >
          <View style={styles.imageWrapper}>
            <Image source={DummyUser2} style={styles.image} />
          </View>
          <Gap height={10} />
          <Text style={styles.name}>{user?.name}</Text>
          <Text style={styles.profession}>{user?.profession ?? '-'}</Text>
        </View>
        <View style={{ paddingVertical: 20, paddingHorizontal: 10 }}>
          <View style={styles.infoWrapper}>
            <Text style={styles.label}>Tempat Lahir</Text>
            <Text style={styles.info}>{user?.birth_place ?? '-'}</Text>
          </View>
          <View style={styles.infoWrapper}>
            <Text style={styles.label}>Tanggal Lahir</Text>
            <Text style={styles.info}>{user?.birth_date ?? '-'}</Text>
          </View>
          <View style={styles.infoWrapper}>
            <Text style={styles.label}>Golongan darah</Text>
            <Text style={styles.info}>{user?.blood_type ?? '-'}</Text>
          </View>
          {/* <View style={styles.button}>
            <Button>Ubah Password</Button>
            <Gap height={20} />
            <Button>Ubah Profil</Button>
          </View> */}
        </View>
      </ScrollView>
      <Modal
        testID={'modal'}
        isVisible={visible}
        backdropColor="#B4B3DB"
        backdropOpacity={0.8}
        animationIn="zoomInDown"
        animationOut="zoomOutUp"
        animationInTiming={600}
        animationOutTiming={600}
        backdropTransitionInTiming={600}
        backdropTransitionOutTiming={600}
      >
        <View
          style={{
            backgroundColor: 'white',
            padding: 22,
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 4,
            borderColor: 'rgba(0, 0, 0, 0.1)',
          }}
        >
          <Text
            style={{
              fontSize: 20,
              marginBottom: 12,
            }}
          >
            Apakah Anda Yakin Ingin Keluar?
          </Text>
          <View style={{ flexDirection: 'row' }}>
            <Button
              style={{ paddingHorizontal: 10 }}
              onPress={() => {
                removeData(['TOKEN']);
                showMessage('Anda Berhasil Keluar');
                navigation.replace('Dashboard');
              }}
            >
              Ya
            </Button>
            <Gap width={20} />
            <Button
              style={{ paddingHorizontal: 10, backgroundColor: color.dim }}
              onPress={() => setVisible(false)}
            >
              Tidak
            </Button>
          </View>
        </View>
      </Modal>
    </MainContainer>
  );
};

export default Account;

const styles = StyleSheet.create({
  infoWrapper: {
    paddingBottom: 16,
    marginBottom: 16,
    borderBottomWidth: 1,
    borderBottomColor: color.dim,
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
