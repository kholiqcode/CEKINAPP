import { useNavigation } from '@react-navigation/core';
import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import { RootStateOrAny, useSelector } from 'react-redux';
import { BoxContainer, Gap, Input } from '../../components';
import { color, FONT_BOLD, FONT_MEDIUM } from '../../theme';

const Search = () => {
  const [input, setInput] = useState('');
  const [refresh, setRefresh] = useState(false);
  const { vaccination } = useSelector(
    (state: RootStateOrAny) => state.vaccinationReducer,
  );
  const [regions, setRegions] = useState(vaccination?.stats?.regions);
  const _handleSearch = (value:any) => {
    setRegions(vaccination?.stats?.regions.filter((item:any) => {
        return item?.name.toLowerCase().includes(value.toLowerCase());
    }));
  }
  const navigation = useNavigation();
  return (
    <BoxContainer>
      <View style={{ flex: 1, paddingHorizontal: 10 }}>
        <Gap height={20} />
        <Input
          placeholder="Masukkan lokasi anda"
          iconRight="search"
          returnKeyType="search"
          autoFocusKeyboard
          onChangeText={(value: any) => _handleSearch(value)}
        />
        <View style={{ flex: 1 }}>
          <Gap height={20} />
          <Text style={{ ...FONT_BOLD(16) }}>Hasil Pencarian</Text>
          <Gap height={10} />
          <FlatList
            data={regions}
            refreshing={refresh}
            onRefresh={() => {
              setRegions(vaccination?.stats?.regions);
            }}
            renderItem={({ item }) => (
              <TouchableOpacity
                style={{
                  padding: 10,
                  borderBottomColor: '#EEEE',
                  borderBottomWidth: 1,
                }}
                onPress={() => navigation.navigate('Dashboard', item)}
              >
                <Text style={{ ...FONT_MEDIUM(16), color: color.primary }}>
                  {item?.name}
                </Text>
              </TouchableOpacity>
            )}
            keyExtractor={(item, index) => index.toString()}
          />
        </View>
      </View>
    </BoxContainer>
  );
};

export default Search;

const styles = StyleSheet.create({});
