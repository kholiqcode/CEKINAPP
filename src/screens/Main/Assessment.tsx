import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import { DummyUser1 } from '../../assets';
import {
  Button,
  CardAssessment,
  Gap,
  Header,
  MainContainer,
} from '../../components';
import { color, FONT_BOLD, FONT_MEDIUM, FONT_REGULAR } from '../../theme';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { Button as ButtonPaper } from 'react-native-paper';
import { DatePickerModal } from 'react-native-paper-dates';

const Assessment = () => {
  const [range, setRange] = React.useState<{
    startDate: Date | undefined;
    endDate: Date | undefined;
  }>({ startDate: undefined, endDate: undefined });

  const [open, setOpen] = React.useState(false);

  const onDismiss = React.useCallback(() => {
    setOpen(false);
  }, [setOpen]);

  const onConfirm = React.useCallback(
    ({ startDate, endDate }) => {
      setOpen(false);
      setRange({ startDate, endDate });
    },
    [setOpen, setRange],
  );

  return (
    <MainContainer>
      <View style={styles.container}>
        <Header
          logo={DummyUser1}
          title="Andini Novianti"
          profile
          subTitle="Freelancer"
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
                Isolasi Ke - 1
              </Text>
              <Text style={{ ...FONT_REGULAR(14), color: color.white }}>
                24 April 2020
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
              // validRange={{
              //   startDate: new Date(2021, 1, 2),  // optional
              //   endDate: new Date(), // optional
              // }}
              // onChange={} // same props as onConfirm but triggered without confirmed by user
              // locale={'nl'} // optional
              saveLabel="Simpan" // optional
              label="Pilih Periode" // optional
              // startLabel="From" // optional
              // endLabel="To" // optional
              // animationType="slide" // optional, default is slide on ios/android and none on web
            />
          </View>
          <Gap height={10} />
          <ScrollView showsVerticalScrollIndicator={false}>
            <CardAssessment />
            <CardAssessment />
            <CardAssessment />
            <CardAssessment />
            <Gap height={10} />
            <Button>Kirim</Button>
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
