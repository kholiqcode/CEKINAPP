import React from 'react';
import { Animated, Image, Text } from 'react-native';
import { ILLogo } from '../../assets';
import { BoxContainer } from '../../components';
import styles from './styles';

const Splash = () => {
  // useEffect(() => {
  //   setTimeout(() => {
  //     navigation.replace('SignIn');
  //   }, 3000);
  // }, []);
  return (
    <BoxContainer style={{ ...styles.container }}>
      <Image style={styles.imageAppLogo} source={ILLogo} />
      <Animated.Text style={styles.textAppName}>CEKIN</Animated.Text>
      <Text style={styles.textAppDesc}>COVID ELECTRONIC INFORMATION</Text>
    </BoxContainer>
  );
};

export default Splash;
