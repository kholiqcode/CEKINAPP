import React, { useCallback } from 'react';
import { Image } from 'react-native';
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import { DummyHospital1, ILBgHospital } from '../../assets';
import {
  Gap,
  Input,
  MainContainer,
  Button,
  CardHospital,
} from '../../components';
import { color, FONT_BOLD, FONT_MEDIUM, FONT_REGULAR } from '../../theme';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { getHospitals } from '../../services/hospital';
import { useEffect } from 'react';
import { RootStateOrAny, useSelector } from 'react-redux';
import { useState } from 'react';
import { FlatList } from 'react-native';

const RumahSakit = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [lastPage, setLastPage] = useState(9999999);
  const [hospital, setHospital] = useState<any>([]);
  const [hospitalTemp, setHospitalTemp] = useState<any>(hospital);
  const [refresh, setRefresh] = useState(false);
  const { hospitals } = useSelector(
    (state: RootStateOrAny) => state.hospitalReducer,
  );
  const _handleGetHospital = useCallback(async () => {
    if (currentPage !== lastPage) {
      await getHospitals({ page: currentPage });
    }
  },[hospital]);

  const _handleSearchHospital = useCallback(async (q) => {
    setHospital([]);
    if (currentPage !== lastPage) {
      await getHospitals({ q});
    }
  },[hospital]);

  useEffect(() => {
    _handleGetHospital();
  }, []);

  useEffect(() => {
    if (hospitals?.data !== undefined ) setHospital([...hospital, ...hospitals?.data]);
    setCurrentPage(currentPage + 1);
    setLastPage(hospitals?.last_page);
    setHospitalTemp(hospital);
  }, [hospitals]);

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
            placeholder="Cari Rumah Sakit Rujukan"
            returnKeyType="search"
            onChangeText={(value:any) => {
              _handleSearchHospital(value);
            }}
          />
        </ImageBackground>
        <View style={{ paddingHorizontal: 10, flex: 1 }}>
          <FlatList
            data={hospital}
            refreshing={refresh}
            keyboardDismissMode="interactive"
            showsVerticalScrollIndicator={false}
            onRefresh={() => {
              _handleGetHospital();
            }}
            renderItem={({ item }) => <CardHospital item={item} />}
            keyExtractor={(item, index) => index.toString()}
            onEndReached={() => _handleGetHospital()}
            onEndReachedThreshold={0.1}
            style={{marginBottom:10}}
          />
        </View>
      </View>
    </MainContainer>
  );
};

export default RumahSakit;

const styles = StyleSheet.create({});
