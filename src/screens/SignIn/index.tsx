import React from 'react';
import { useState } from 'react';
import { Image, StyleSheet, Text, View, Animated, TouchableOpacity } from 'react-native';
import { ILLogo } from '../../assets';
import { BoxContainer, Button, Gap, Input } from '../../components';
import { color, FONT_MEDIUM } from '../../theme';
import styles from '../Splash/styles';

const SignIn = () => {
  const [showPassword, setShowPassword] = useState(true);
  const tooglePassword = () => {
    setShowPassword(!showPassword);
  };
  return (
    <BoxContainer style={{ justifyContent: 'space-between' }}>
      <View style={{ alignItems: 'center', justifyContent: 'center',flex:1 }}>
        <Image style={styles.imageAppLogo} source={ILLogo} />
        <Animated.Text style={styles.textAppName}>CEKIN</Animated.Text>
        <Text style={styles.textAppDesc}>COVID ELECTRONIC INFORMATION</Text>
      </View>
      <View style={{ flex: 1, paddingHorizontal: 15 }}>
        <Gap height={20} />
        <Input
          placeholder="Email"
          keyboardType="email-address"
        />
        <Gap height={20} />
        <Input
          secureTextEntry={showPassword}
          iconRight={showPassword ? 'eye' : 'eye-slash'}
          returnKeyType="done"
          placeholder="Password"
          onPressIcon={() => tooglePassword()}
        />
        <Gap height={40} />
        <Button>Login</Button>
        <Gap height={40} />
        <TouchableOpacity>
          <Text style={{ color: color.primary, ...FONT_MEDIUM(16), textAlign: 'right' }}>
            Lupa Password
          </Text>
        </TouchableOpacity>
        <Gap height={40} />
        <TouchableOpacity>
          <Text style={{ color: color.primary, ...FONT_MEDIUM(16), textAlign: 'center' }}>
            Belum Punya Akun
          </Text>
        </TouchableOpacity>
      </View>
    </BoxContainer>
  );
};

export default SignIn;
