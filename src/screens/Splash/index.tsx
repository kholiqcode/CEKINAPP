import React from 'react';
import { useEffect } from 'react';
import { Animated, Image, Text } from 'react-native';
import { ILLogo } from '../../assets';
import { BoxContainer } from '../../components';
import { getUserInfo, getVaccination } from '../../services';
import { getData, removeData } from '../../utils';
import styles from './styles';

const Splash: React.FC<any> = ({ navigation }) => {
  useEffect(() => {
    setTimeout(() => {
      _handleGetData();
    }, 4000);
  }, []);
  const _handleGetData = async () => {
    await getVaccination();
    getData('TOKEN').then(async (res) => {
      try {
        if (res?.value) {
          if (await getUserInfo(res?.value)) {
            navigation.replace('MainScreen');
          }
        } else {
          navigation.replace('Dashboard');
        }
      } catch (error) {
        // console.log(error);
        removeData(['TOKEN']);
        navigation.replace('Dashboard');
      }
    });
  };
  return (
    <BoxContainer style={{ ...styles.container }}>
      <Image style={styles.imageAppLogo} source={ILLogo} />
      <Animated.Text style={styles.textAppName}>CEKIN</Animated.Text>
      <Text style={styles.textAppDesc}>COVID ELECTRONIC INFORMATION</Text>
    </BoxContainer>
  );
};

export default Splash;
