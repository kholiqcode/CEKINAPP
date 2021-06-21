import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  Image,
  FlatList,
} from 'react-native';
import { BoxContainer, CardConsultation, Gap, Input } from '../../components';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { color, FONT_MEDIUM, FONT_REGULAR } from '../../theme';
import { DummyUser2 } from '../../assets';
import { useState } from 'react';
import { RootStateOrAny, useSelector } from 'react-redux';
import { useCallback } from 'react';
import { getDoctors } from '../../services/doctor';
import { useEffect } from 'react';

const Consultation: React.FC<any> = ({ onPress, navigation }) => {
  const [refresh, setRefresh] = useState(false);
  const { doctor } = useSelector(
    (state: RootStateOrAny) => state.doctorReducer,
  );
  const [doctors, setDoctors] = useState<any>(doctor);
  const _handleSearch = (value: any) => {
    setDoctors(
      doctor.filter((item: any) => {
        return item?.name.toLowerCase().includes(value.toLowerCase());
      }),
    );
  };
  const _handleGetDoctor = useCallback(async () => {
    await getDoctors();
    console.log(doctors);
  }, [doctors]);
  useEffect(() => {
    _handleGetDoctor();
  }, []);
  return (
    <BoxContainer>
      <View style={{ paddingHorizontal: 10, paddingTop: 20 }}>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <TouchableOpacity
            activeOpacity={0.5}
            onPress={() => navigation.goBack()}
          >
            <Icon name="arrow-left" size={24} color={color.primary} />
          </TouchableOpacity>
          <Gap width={15} />
          <Text style={{ ...FONT_MEDIUM(20) }}>Konsultasi</Text>
        </View>
        <View style={{ paddingTop: 15 }}>
          <Input
            placeholder="Cari Dokter"
            iconLeft="search"
            returnKeyType="search"
            onChangeText={(value: any) => _handleSearch(value)}
          />
          <Gap height={15} />
          <FlatList
            data={doctors}
            refreshing={refresh}
            keyboardDismissMode="interactive"
            showsVerticalScrollIndicator={false}
            onRefresh={() => {
              _handleGetDoctor();
            }}
            renderItem={({ item }) => (
              <CardConsultation name={item?.name} phone={item?.phone} />
            )}
            keyExtractor={(item, index) => index.toString()}
            style={{ marginBottom: 10 }}
          />
        </View>
      </View>
    </BoxContainer>
  );
};

export default Consultation;

const styles = StyleSheet.create({});
