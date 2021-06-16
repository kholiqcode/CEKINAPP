import React from 'react';
import { memo } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { RootStateOrAny, useSelector } from 'react-redux';
import { ILLogo } from '../../assets';
import { BoxContainer, Gap, Header, Button } from '../../components';
import { color, FONT_MEDIUM, FONT_REGULAR } from '../../theme';

const ResultAssessment: React.FC<any> = ({ navigation }) => {
  const { assessment } = useSelector(
    (state: RootStateOrAny) => state.assessmentReducer,
  );
  return (
    <BoxContainer>
      <View style={{ flex: 1, paddingHorizontal: 10 }}>
        <Header
          title="CEK-IN"
          subTitle="COVID ELECTRONIC INFORMATION"
          style={{ paddingHorizontal: 10, paddingTop: 15 }}
          back
          onPress={() => navigation.goBack()}
        />
        <Gap height={20} />
      </View>
      <ScrollView
        style={{ paddingHorizontal: 10 }}
        showsVerticalScrollIndicator={false}
      >
        <Text style={{ ...FONT_MEDIUM(24), textAlign: 'center' }}>
          Hasil Self Assesment
        </Text>
        <Gap
          height={20}
          style={{ borderBottomWidth: 1, borderBottomColor: '#EEEE' }}
        />
        <View style={{ flex: 1 }}>
          <Gap height={20} />
          <Text style={{ ...FONT_MEDIUM(24), textAlign: 'center' }}>
            Score : {assessment?.score}
          </Text>
          <Text style={{ ...FONT_MEDIUM(16), textAlign: 'center' }}>
            {assessment?.information?.id}
          </Text>
          <Gap
            height={20}
            style={{ borderBottomWidth: 1, borderBottomColor: '#EEEE' }}
          />
          <Gap height={20} />
          <Text style={{ ...FONT_MEDIUM(14), textAlign: 'center' }}>
            Saran Untuk Pemulihan COVID-19
          </Text>
          <Gap height={10} />
          <View>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <View
                style={{
                  backgroundColor: '#495A75',
                  width: 15,
                  height: 15,
                }}
              />
              <Gap width={15} />
              <Text style={{ ...FONT_REGULAR(14), flexShrink: 1 }}>
                Pada hari ke - 1 isolasi mandiri Anda disarankan untuk
                memperbanyak makanan buah - buahan
              </Text>
            </View>
          </View>
          <Gap height={10} />
          <View>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <View
                style={{
                  backgroundColor: '#495A75',
                  width: 15,
                  height: 15,
                }}
              />
              <Gap width={15} />
              <Text style={{ ...FONT_REGULAR(14), flexShrink: 1 }}>
                Pada hari ke - 2 isolasi mandiri Anda disarankan untuk berjemur
                dibawah sinar matahari pukul 06.00 WIB
              </Text>
            </View>
          </View>
          <Gap height={10} />
          <View>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <View
                style={{
                  backgroundColor: '#495A75',
                  width: 15,
                  height: 15,
                }}
              />
              <Gap width={15} />
              <Text style={{ ...FONT_REGULAR(14), flexShrink: 1 }}>
                Pada hari ke - 3 isolasi mandiri Anda disarankan untuk rajin
                mengecek suhu badan
              </Text>
            </View>
          </View>
        </View>
        <Gap height={20} />
        {assessment?.score > 5 ? (
          <View>
            <Button onPress={() => navigation.navigate('SignIn')}>Isolasi Mandiri</Button>
            <Gap height={10} />
            <Text style={{ ...FONT_REGULAR(12), color: 'red' }}>
              ** Masuk untuk melakukan melakukan karantina mandiri selama 14
              hari.
            </Text>
          </View>
        ) : (
          <Button>Beranda</Button>
        )}
      </ScrollView>
    </BoxContainer>
  );
};

export default memo(ResultAssessment);

const styles = StyleSheet.create({});
