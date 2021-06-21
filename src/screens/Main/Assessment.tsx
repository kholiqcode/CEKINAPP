import React, { useEffect, useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import { DummyUser1, DummyUser2, ILLogo } from '../../assets';
import {
  Button,
  CardAssessment,
  Gap,
  Header,
  MainContainer,
} from '../../components';
import { color, FONT_BOLD, FONT_MEDIUM, FONT_REGULAR } from '../../theme';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { DatePickerModal } from 'react-native-paper-dates';
import {
  getAssessmentData,
  getIsolationInfo,
  postSelfAssessmentDaily,
} from '../../services';
import { RootStateOrAny, useSelector } from 'react-redux';
import moment from 'moment';
import { useCallback } from 'react';

const Assessment: React.FC<any> = ({ navigation }) => {
  const { user } = useSelector((state: RootStateOrAny) => state.authReducer);
  const { assessmentData } = useSelector(
    (state: RootStateOrAny) => state.assessmentReducer,
  );
  const { isolation } = useSelector(
    (state: RootStateOrAny) => state.isolationReducer,
  );
  const [range, setRange] = React.useState<{
    startDate: Date | undefined;
    endDate: Date | undefined;
  }>({
    startDate: new Date(
      parseInt(moment(isolation?.start_date).format('Y')),
      parseInt(moment(isolation?.start_date).format('M')),
      parseInt(moment(isolation?.start_date).format('D')),
    ),
    endDate: new Date(
      parseInt(moment(isolation?.end_date).format('Y')),
      parseInt(moment(isolation?.end_date).format('M')),
      parseInt(moment(isolation?.end_date).format('D')),
    ),
  });
  const [outHome, setOutHome] = useState(false);
  const [fever, setFever] = useState(false);
  const [pain, setPain] = useState(false);
  const [breath, setBreath] = useState(false);
  const [physicalContact, setPhysicalContact] = useState(false);
  const [daysIsolation, setDaysIsolation] = useState(1);
  const [assessment, setAssessment] = useState([]);
  const [now, setNow] = useState(moment().format('Y-MM-DD'));

  const [open, setOpen] = React.useState(false);

  const onDismiss = React.useCallback(() => {
    setOpen(false);
  }, [setOpen]);

  const _countDaysIsolation = useCallback(() => {
    let start = moment([
      parseInt(moment(isolation?.start_date).format('Y')),
      parseInt(moment(isolation?.start_date).format('M')),
      parseInt(moment(isolation?.start_date).format('D')),
    ]);
    let end = moment([
      parseInt(moment(now).format('Y')),
      parseInt(moment(now).format('M')),
      parseInt(moment(now).format('D')),
    ]);

    //Difference in number of days
    setDaysIsolation(moment.duration(end.diff(start)).asDays());
  }, [isolation]);

  const onConfirm = React.useCallback(
    ({ startDate, endDate }) => {
      console.log(startDate);
      setOpen(false);
      setRange({ startDate, endDate });
      setNow(moment(startDate).format('Y-MM-DD'));
    },
    [setOpen, setRange],
  );

  const _handleAssessmentDaily = async () => {
    const payload = {
      out_home: outHome,
      fever,
      breath,
      pain,
      physical_contact: physicalContact,
    };
    await postSelfAssessmentDaily(payload);
    navigation.navigate('ResultAssessment');
  };

  const _handleGetIsolationInfo = async () => {
    await getIsolationInfo();
  };
  const _handleGetDataAssessment = async () => {
    await getAssessmentData();
  };

  useEffect(() => {
    _handleGetIsolationInfo();
    _handleGetDataAssessment();
    _countDaysIsolation();
  }, []);

  useEffect(() => {
    _countDaysIsolation();
  }, [isolation]);

  return (
    <MainContainer>
      <View style={styles.container}>
        <Header
          logo={DummyUser2 ?? ILLogo}
          title={user?.name}
          profile
          subTitle={
            user?.profession ?? user?.gender == 'L' ? 'Laki-Laki' : 'Perempuan'
          }
        />
        <View style={{ flex: 1, paddingTop: 10 }}>
          <Text style={{ ...FONT_MEDIUM(24), textAlign: 'center' }}>
            Self Assesment
          </Text>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              backgroundColor: color.primary,
              borderRadius: 15,
              alignItems: 'center',
              paddingHorizontal: 20,
              paddingVertical: 5,
              borderWidth: 2,
            }}
          >
            <View>
              <Text style={{ ...FONT_REGULAR(14), color: color.white }}>
                Isolasi Ke - {daysIsolation}
              </Text>
              <Text style={{ ...FONT_REGULAR(14), color: color.white }}>
                {now}
              </Text>
            </View>
            <TouchableOpacity onPress={() => setOpen(true)}>
              <Icon name="calendar-alt" size={24} color="#76A9FF" />
            </TouchableOpacity>
            <DatePickerModal
              locale={'id'} //optional, default: automatic
              mode="range"
              visible={open}
              onDismiss={onDismiss}
              startDate={range.startDate}
              endDate={range.endDate}
              onConfirm={onConfirm}
              // onChange={} // same props as onConfirm but triggered without confirmed by user
              saveLabel="Simpan" // optional
              label="Pilih Periode" // optional
              // startLabel="From" // optional
              // endLabel="To" // optional
              // animationType="slide" // optional, default is slide on ios/android and none on web
            />
          </View>
          <Gap height={10} />
          <ScrollView showsVerticalScrollIndicator={false}>
            <CardAssessment
              defaultValue={
                assessmentData?.count > 0 ? assessmentData[0]?.out_home : false
              }
              onSelect={(value: any) => setOutHome(value)}
              question="Apakah pernah keluar rumah/ tempat umum (pasar, fasyankes, kerumunan orang, dan lain lain ) hari ini ?"
            />
            <CardAssessment
              defaultValue={
                assessmentData?.count > 0 ? assessmentData[0]?.fever : false
              }
              onSelect={(value: any) => setFever(value)}
              question="Apakah anda merasakan demam/ batuk/pilek/ sakit tenggorokan/sesak hari ini?"
            />
            <CardAssessment
              defaultValue={
                assessmentData?.count > 0 ? assessmentData[0]?.pain : false
              }
              onSelect={(value: any) => setPain(value)}
              question="Apakah anda melakukan kontak fisik dengan orang yang dinyatakan ODP,PDP atau konfirm COVID-19 hari ini?"
            />
            <CardAssessment
              defaultValue={
                assessmentData?.count > 0 ? assessmentData[0]?.breath : false
              }
              onSelect={(value: any) => setBreath(value)}
              question="Apakah anda mengikuti kegiatan yang melibatkan banyak orang hari ini?"
            />
            <CardAssessment
              defaultValue={
                assessmentData?.count > 0
                  ? assessmentData[0]?.physical_contact
                  : false
              }
              onSelect={(value: any) => setPhysicalContact(value)}
              question="Apakah anda merasakan kondisi yang semakin buruk hari ini?"
            />
            <Gap height={10} />
            <Button onPress={_handleAssessmentDaily}>Kirim</Button>
            <Gap height={20} />
          </ScrollView>
        </View>
      </View>
    </MainContainer>
  );
};

export default Assessment;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: color.white,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    paddingHorizontal: 10,
    paddingTop: 20,
  },
});
