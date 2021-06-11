import React from 'react';
import {
  Dimensions,
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import { DummyNews1, DummyUser1 } from '../../assets';
import { CardNews, Gap, Header, MainContainer } from '../../components';
import { color, FONT_BOLD, FONT_MEDIUM, FONT_REGULAR } from '../../theme';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { Image } from 'react-native';

const { height, width } = Dimensions.get('window');

const Home = () => {
  return (
    <MainContainer>
      <View style={styles.container}>
        <Header
          logo={DummyUser1}
          title="Andini Novianti"
          subTitle="Freelancer"
          profile
        />
        <Gap height={20} />
        <View>
          <View
            style={{ flexDirection: 'row', justifyContent: 'space-evenly' }}
          >
            <View
              style={{
                backgroundColor: color.primary,
                justifyContent: 'center',
                alignItems: 'center',
                flex: 1,
                borderRadius: 5,
                paddingVertical: 30,
              }}
            >
              <Icon
                name="hospital"
                size={50}
                style={{ textAlignVertical: 'center' }}
                color={color.white}
                solid
              />
              <Gap height={10} />
              <Text style={{ ...FONT_REGULAR(16), color: color.white }}>
                RS Rujukan
              </Text>
            </View>
            <Gap width={20} />
            <View
              style={{
                backgroundColor: color.primary,
                justifyContent: 'center',
                alignItems: 'center',
                flex: 1,
                borderRadius: 5,

                paddingVertical: 30,
              }}
            >
              <Icon
                name="clipboard-list"
                size={50}
                style={{ textAlignVertical: 'center' }}
                color={color.white}
                solid
              />
              <Gap height={10} />
              <Text style={{ ...FONT_REGULAR(16), color: color.white }}>
                Self Assesment
              </Text>
            </View>
          </View>
          <Gap height={20} />
          <View
            style={{ flexDirection: 'row', justifyContent: 'space-evenly' }}
          >
            <View
              style={{
                backgroundColor: color.primary,
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: 5,
                flex: 1,
                paddingVertical: 30,
              }}
            >
              <Icon
                name="hand-holding-medical"
                size={50}
                style={{ textAlignVertical: 'center' }}
                color={color.white}
                solid
              />
              <Gap height={10} />
              <Text style={{ ...FONT_REGULAR(16), color: color.white }}>
                Donasi
              </Text>
            </View>
            <Gap width={20} />
            <View
              style={{
                backgroundColor: color.primary,
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: 5,
                flex: 1,
                paddingVertical: 30,
              }}
            >
              <Icon
                name="user-md"
                size={50}
                style={{ textAlignVertical: 'center' }}
                color={color.white}
                solid
              />
              <Gap height={10} />
              <Text style={{ ...FONT_REGULAR(16), color: color.white }}>
                Konsultasi
              </Text>
            </View>
          </View>
        </View>
        <Gap height={15} />
        <Text style={{ ...FONT_BOLD(16) }}>Info Seputar COVID</Text>
        <Gap height={10} />
        <ScrollView style={{ flex: 1 }} showsVerticalScrollIndicator={false}>
          <Gap height={10} />
          <CardNews />
          <CardNews />
          <CardNews />
        </ScrollView>
      </View>
    </MainContainer>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: color.white,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    paddingHorizontal: 10,
    paddingVertical: 10,
  },
  
});
