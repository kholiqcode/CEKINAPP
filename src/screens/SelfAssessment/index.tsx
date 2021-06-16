import React, { useCallback, useState } from 'react';
import { StyleSheet, Text, View, ActivityIndicator } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { ILLogo } from '../../assets';
import CheckBox from '@react-native-community/checkbox';
import { BoxContainer, Button, Gap, Header } from '../../components';
import { color, FONT_LIGHT, FONT_MEDIUM, FONT_REGULAR } from '../../theme';
import { TextInput } from 'react-native-gesture-handler';
import RadioForm, {
  RadioButton,
  RadioButtonInput,
  RadioButtonLabel,
} from 'react-native-simple-radio-button';
import { postSelfAssessment } from '../../services/assessment';
import { useEffect } from 'react';
import { RootStateOrAny, useSelector } from 'react-redux';

const SelfAssessment = ({navigation}) => {
  const [fever, setFever] = useState(false);
  const [cough, setCough] = useState(false);
  const [headache, setHeadache] = useState(false);
  const [contactWithSuspected, setContactWithSuspected] = useState(0);
  const [duration, setDuration] = useState('');
  const [medicine, setMedicine] = useState('');
  const [temperature, setTemperature] = useState('');
  const [age, setAge] = useState('');
  const [dyspnea, setDyspnea] = useState(false);
  const [myalgia, setMyalgia] = useState(false);
  const [sputum, setSputum] = useState(false);
  const [immunocompromised, setImmunocompromised] = useState(false);
  const [chronicRespiratory, setChronicRespiratory] = useState(false);
  const [cvd, setCvd] = useState(false);
  const [cancer, setCancer] = useState(false);
  const [diabetes, setDiabetes] = useState(false);
  const [hypertension, setHypertension] = useState(false);
  const { isLoading } = useSelector(
    (state: RootStateOrAny) => state.globalReducer,
  );
  var radio_props = [
    { label: 'Ya', value: 1 },
    { label: 'Tidak', value: 0 },
    { label: 'Tidak Tahu', value: 2 },
  ];
  var radio_props2 = [
    {
      label:
        'Bertatap muka (jarak dekat) selama kurang dari 15 menit dengan seseorang yang positif covid19 DAN memiliki gejala',
      value: 'a',
    },
    {
      label:
        'Berada dalam ruang tertutup selama kurang dari 2 jam dengan seseorang yang positif covid 19 DAN memiliki gejala',
      value: 'b',
    },
    {
      label:
        'Bertatap muka (jarak dekat) selama lebih dari 15 menit dengan seseorang yang positif covid19 sebelum ataupun sesudah memiliki gejala',
      value: 'c',
    },
    {
      label: 'Berada dalam ruang tertutup selama lebih dari 2 jam ',
      value: 'd',
    },
  ];
  

  const _handleAssessment = () => {
    postSelfAssessment({
      fever,
      cough,
      headache,
      contactWithSuspected: contactWithSuspected == 1 ? true : false,
      duration,
      medicine,
      temperature,
      age,
      dyspnea,
      myalgia,
      sputum,
      immunocompromised,
      chronicRespiratory,
      cvd,
      cancer,
      diabetes,
      hypertension,
      location: {},
    });
    setTimeout(()=>{
      if (!isLoading) {
        navigation.navigate('ResultAssessment');
      }
    },1500)
  };


  return (
    <BoxContainer>
      <View style={styles.container}>
        <View style={{ flexDirection: 'row',alignItems:'center'}}>
          <Header
            title="CEK-IN"
            subTitle="COVID ELECTRONIC INFORMATION"
            style={styles.header}
            back
            onPress={() => navigation.goBack()}
          />
        </View>
        <View style={{ flex: 1, paddingTop: 10 }}>
          <Text style={{ ...FONT_MEDIUM(24), textAlign: 'center' }}>
            Self Assesment
          </Text>

          <Gap height={10} />
          <ScrollView showsVerticalScrollIndicator={false}>
            <View style={{ padding: 5 }}>
              <Text style={{ ...FONT_REGULAR(14), width: '90%' }}>
                Apakah Anda mengalami gejala-gejala berikut:
              </Text>
              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <CheckBox
                  value={fever}
                  onValueChange={(newValue: any) => setFever(newValue)}
                  tintColors
                />
                <Text style={{ ...FONT_MEDIUM(14) }}>Demam</Text>
              </View>
              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <CheckBox
                  value={cough}
                  onValueChange={(newValue: any) => setCough(newValue)}
                  tintColors
                />
                <Text style={{ ...FONT_MEDIUM(14) }}>Batuk</Text>
              </View>
              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <CheckBox
                  value={headache}
                  onValueChange={(newValue: any) => setHeadache(newValue)}
                  tintColors
                />
                <Text style={{ ...FONT_MEDIUM(14) }}>Sakit Kepala</Text>
              </View>
            </View>
            <View style={{ padding: 5 }}>
              <Text style={{ ...FONT_REGULAR(14), width: '90%' }}>
                Apakah Anda sedang mengonsumsi obat pereda demam atau pereda
                sakit?
              </Text>
              <Text style={{ ...FONT_LIGHT(10), color: color.dim }}>
                Kalau iya, sebutkan. Pisahkan dengan koma. Kalau tidak, kosongi.
              </Text>
              <View>
                <TextInput
                  numberOfLines={3}
                  style={{
                    borderWidth: 2,
                    borderRadius: 5,
                    textAlignVertical: 'top',
                    color: color.primary,
                    paddingHorizontal: 10,
                  }}
                  value={medicine}
                  onChangeText={(value) => setMedicine(value)}
                />
              </View>
            </View>
            <View style={{ padding: 5 }}>
              <Text style={{ ...FONT_REGULAR(14), width: '90%' }}>
                Apakah anda pernah melakukan kontak dengan pasien terkonfirmasi
                COVID19 selama hari 1 sampai 14 dari pasien tersebut menunjukkan
                gejala?
              </Text>
              <View>
                <RadioForm
                  animation={true}
                  formHorizontal={true}
                  labelHorizontal={true}
                  initial={0}
                >
                  {radio_props.map((obj, i) => {
                    return (
                      <RadioButton labelHorizontal={true} key={i}>
                        <RadioButtonInput
                          obj={obj}
                          index={i}
                          isSelected={contactWithSuspected == obj?.value}
                          onPress={(thisValue: any) =>
                            setContactWithSuspected(thisValue)
                          }
                          borderWidth={2}
                          buttonInnerColor={'#10536D'}
                          buttonOuterColor={
                            contactWithSuspected == obj?.value
                              ? '#10536D'
                              : '#6F8B9A'
                          }
                          buttonSize={10}
                          buttonOuterSize={20}
                          buttonStyle={{}}
                          buttonWrapStyle={{ marginLeft: 10 }}
                        />
                        <RadioButtonLabel
                          obj={obj}
                          index={i}
                          labelHorizontal={true}
                          onPress={(thisValue: any) =>
                            setContactWithSuspected(thisValue)
                          }
                          labelStyle={{
                            ...FONT_MEDIUM(14),
                            color:
                              contactWithSuspected == obj?.value
                                ? '#10536D'
                                : '#6F8B9A',
                          }}
                          labelWrapStyle={{}}
                        />
                      </RadioButton>
                    );
                  })}
                </RadioForm>
                {contactWithSuspected === 1 && (
                  <View>
                    <Text
                      style={{
                        ...FONT_MEDIUM(16),
                        width: '90%',
                        paddingLeft: 10,
                      }}
                    >
                      Berapa Lama ?
                    </Text>
                    <RadioForm
                      animation={true}
                      style={{
                        flexWrap: 'wrap',
                        width: '80%',
                      }}
                    >
                      {radio_props2.map((obj, i) => {
                        return (
                          <RadioButton labelHorizontal={true} key={i}>
                            <RadioButtonInput
                              obj={obj}
                              index={i}
                              isSelected={duration == obj?.value}
                              onPress={(thisValue: any) =>
                                setDuration(thisValue)
                              }
                              borderWidth={2}
                              buttonInnerColor={'#10536D'}
                              buttonOuterColor={
                                duration == obj?.value ? '#10536D' : '#6F8B9A'
                              }
                              buttonSize={10}
                              buttonOuterSize={20}
                              buttonStyle={{}}
                              buttonWrapStyle={{ marginLeft: 10 }}
                            />
                            <RadioButtonLabel
                              obj={obj}
                              index={i}
                              labelHorizontal={true}
                              onPress={(thisValue: any) =>
                                setContactWithSuspected(thisValue)
                              }
                              labelStyle={{
                                ...FONT_MEDIUM(14),
                                color:
                                  duration == obj?.value
                                    ? '#10536D'
                                    : '#6F8B9A',
                              }}
                              labelWrapStyle={{}}
                            />
                          </RadioButton>
                        );
                      })}
                    </RadioForm>
                  </View>
                )}
              </View>
            </View>
            <View style={{ padding: 5 }}>
              <Text style={{ ...FONT_REGULAR(14), width: '90%' }}>
                Berapa suhu tubuh Anda?
              </Text>
              <View>
                <TextInput
                  style={{
                    borderWidth: 2,
                    borderRadius: 5,
                    textAlignVertical: 'center',
                    color: color.primary,
                    paddingHorizontal: 10,
                  }}
                  value={temperature}
                  onChangeText={(value) => setTemperature(value)}
                />
              </View>
            </View>
            <View style={{ padding: 5 }}>
              <Text style={{ ...FONT_REGULAR(14), width: '90%' }}>
                Berapa usia Anda?
              </Text>
              <View>
                <TextInput
                  style={{
                    borderWidth: 2,
                    borderRadius: 5,
                    textAlignVertical: 'center',
                    color: color.primary,
                    paddingHorizontal: 10,
                  }}
                  value={age}
                  onChangeText={(value) => setAge(value)}
                />
              </View>
            </View>
            <View style={{ padding: 5 }}>
              <Text style={{ ...FONT_REGULAR(14), width: '90%' }}>
                Apakah punya symptom lain?
              </Text>
              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <CheckBox
                  value={dyspnea}
                  onValueChange={(newValue: any) => setDyspnea(newValue)}
                  tintColors
                />
                <Text style={{ ...FONT_MEDIUM(14) }}>Sesak Nafas</Text>
              </View>
              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <CheckBox
                  value={myalgia}
                  onValueChange={(newValue: any) => setMyalgia(newValue)}
                  tintColors
                />
                <Text style={{ ...FONT_MEDIUM(14) }}>Nyeri Otot</Text>
              </View>
              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <CheckBox
                  value={sputum}
                  onValueChange={(newValue: any) => setSputum(newValue)}
                  tintColors
                />
                <Text style={{ ...FONT_MEDIUM(14) }}>Dahak</Text>
              </View>
            </View>
            <View style={{ padding: 5 }}>
              <Text style={{ ...FONT_REGULAR(14), width: '90%' }}>
                Riwayat penyakit sebelumnya?
              </Text>
              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <CheckBox
                  value={immunocompromised}
                  onValueChange={(newValue: any) =>
                    setImmunocompromised(newValue)
                  }
                  tintColors
                />
                <Text style={{ ...FONT_MEDIUM(14) }}>
                  Daya Tahan Tubuh Lemah (HIV-AIDS, Lupus, atau mengkonsumsi
                  Corticosteroids)
                </Text>
              </View>
              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <CheckBox
                  value={chronicRespiratory}
                  onValueChange={(newValue: any) =>
                    setChronicRespiratory(newValue)
                  }
                  tintColors
                />
                <Text style={{ ...FONT_MEDIUM(14) }}>
                  Penyakit Saluran Pernapasan Kronis
                </Text>
              </View>
              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <CheckBox
                  value={cvd}
                  onValueChange={(newValue: any) => setCvd(newValue)}
                  tintColors
                />
                <Text style={{ ...FONT_MEDIUM(14) }}>
                  Penyakit Kardiovaskular
                </Text>
              </View>
              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <CheckBox
                  value={cancer}
                  onValueChange={(newValue: any) => setCancer(newValue)}
                  tintColors
                />
                <Text style={{ ...FONT_MEDIUM(14) }}>Kanker</Text>
              </View>
              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <CheckBox
                  value={diabetes}
                  onValueChange={(newValue: any) => setDiabetes(newValue)}
                  tintColors
                />
                <Text style={{ ...FONT_MEDIUM(14) }}>Diabetes</Text>
              </View>
              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <CheckBox
                  value={hypertension}
                  onValueChange={(newValue: any) => setHypertension(newValue)}
                  tintColors
                />
                <Text style={{ ...FONT_MEDIUM(14) }}>Darah Tinggi</Text>
              </View>
            </View>
            <Gap height={10} />
            <Button onPress={_handleAssessment}>
              {isLoading ? (
                <ActivityIndicator size="large" color={color.white} />
              ) : (
                'Kirim'
              )}
            </Button>
            <Gap height={20} />
          </ScrollView>
        </View>
      </View>
    </BoxContainer>
  );
};

export default SelfAssessment;

const styles = StyleSheet.create({
  header: { paddingHorizontal: 10, paddingTop: 15 },
  container: {
    flex: 1,
    backgroundColor: color.white,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    paddingHorizontal: 10,
  },
});
