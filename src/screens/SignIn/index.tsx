import { NavigationContainer, useNavigation } from '@react-navigation/native';
import React, { createRef } from 'react';
import { useState } from 'react';
import {
  Image,
  StyleSheet,
  Text,
  View,
  Animated,
  TouchableOpacity,
} from 'react-native';
import { RootStateOrAny, useSelector } from 'react-redux';
import { ILLogo } from '../../assets';
import { BoxContainer, Button, Gap, Input } from '../../components';
import { postLogin } from '../../services/auth';
import { color, FONT_MEDIUM } from '../../theme';
import { validateEmail } from '../../utils';
import showMessage from '../../utils/showMessage';
import styles from '../Splash/styles';

const SignIn = () => {
  const [showPassword, setShowPassword] = useState(true);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const emailRef = createRef<any>();
  const passwordRef = createRef<any>();
  const navigation = useNavigation<any>();
  const tooglePassword = () => {
    setShowPassword(!showPassword);
  };
  const { isLoading } = useSelector(
    (state: RootStateOrAny) => state.globalReducer,
  );
  const _handleLogin = async () => {
    if (email === '') {
      showMessage('Email harus diisi!', 'error');
      return emailRef.current.focus();
    }
    if (password === '') {
      showMessage('Password harus diisi!', 'error');
      return passwordRef.current.focus();
    }
    if (!validateEmail(email)) {
      showMessage('Email tidak valid!', 'error');
      return emailRef.current.focus();
    }
    try {
      if (
        await postLogin({
          email,
          password,
        })
      ) {
        navigation.replace('MainScreen');
      }
    } catch (error) {
      showMessage(error?.meta?.message ?? 'Terjadi Kesalahan', 'error');
    }
  };
  return (
    <BoxContainer style={{ justifyContent: 'space-between' }}>
      <View style={{ alignItems: 'center', justifyContent: 'center', flex: 1 }}>
        <Image style={styles.imageAppLogo} source={ILLogo} />
        <Animated.Text style={styles.textAppName}>CEKIN</Animated.Text>
        <Text style={styles.textAppDesc}>COVID ELECTRONIC INFORMATION</Text>
      </View>
      <View style={{ flex: 1, paddingHorizontal: 15 }}>
        <Gap height={20} />
        <Input
          placeholder="Email"
          keyboardType="email-address"
          forwardedRef={emailRef}
          value={email}
          onChangeText={(value: any) => setEmail(value)}
        />
        <Gap height={20} />
        <Input
          secureTextEntry={showPassword}
          iconRight={showPassword ? 'eye' : 'eye-slash'}
          returnKeyType="done"
          placeholder="Password"
          onPress={() => tooglePassword()}
          forwardedRef={passwordRef}
          value={password}
          onChangeText={(value: any) => setPassword(value)}
        />
        <Gap height={40} />
        <Button onPress={() => _handleLogin()}>Login</Button>
        <Gap height={40} />
        <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
          <Text
            style={{
              color: color.primary,
              ...FONT_MEDIUM(16),
              textAlign: 'center',
            }}
          >
            Belum Punya Akun
          </Text>
        </TouchableOpacity>
      </View>
    </BoxContainer>
  );
};

export default SignIn;
