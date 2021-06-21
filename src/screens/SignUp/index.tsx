import { useNavigation } from '@react-navigation/native';
import React, { createRef } from 'react';
import { useState } from 'react';
import {
  StyleSheet,
  Text,
  KeyboardAvoidingView,
  TouchableOpacity,
  ScrollView,
  ActivityIndicator,
} from 'react-native';
import { BoxContainer, Button, Gap, Header, Input } from '../../components';
import { FONT_MEDIUM } from '../../theme';
import { ListItem, BottomSheet } from 'react-native-elements';
import { color } from 'react-native-elements/dist/helpers';
import { postRegister } from '../../services/auth';
import { Platform } from 'react-native';
import { RootStateOrAny, useSelector } from 'react-redux';
import showMessage from '../../utils/showMessage';
import { validateEmail } from '../../utils';

const SignUp: React.FC<any> = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [gender, setGender] = useState('');
  const [password, setPassword] = useState('');
  const [phone, setPhone] = useState('');
  const [passwordConfirmation, setPasswordConfirmation] = useState('');
  const [showPassword, setShowPassword] = useState(true);
  const [loading, setLoading] = useState(true);
  const { isLoading } = useSelector(
    (state: RootStateOrAny) => state.globalReducer,
  );

   const nameRef = createRef<any>();
   const emailRef = createRef<any>();
   const phoneRef = createRef<any>();
   const genderRef = createRef<any>();
   const passwordRef = createRef<any>();
   const passwordConfirmationRef = createRef<any>();

  const tooglePassword = () => {
    setShowPassword(!showPassword);
  };
  const [isVisible, setIsVisible] = useState(false);
  const list = [
    {
      title: 'Laki-Laki',
      //   containerStyle: { backgroundColor: color.primary },
      titleStyle: { color: color.primary },
      onPress: () => {
        setIsVisible(false);
        setGender('L');
      },
    },
    {
      title: 'Perempuan',
      //   containerStyle: { backgroundColor: color.primary },
      titleStyle: { color: color.primary },
      onPress: () => {
        setIsVisible(false);
        setGender('P');
      },
    },
    {
      title: 'Cancel',
      containerStyle: { backgroundColor: color.primary },
      titleStyle: { color: 'white' },
      onPress: () => {
        setIsVisible(false);
        setGender('L');
      },
    },
  ];

  const _handleRegister = async () => {
    setLoading(true);
    if (name === '') {
      showMessage('Nama harus diisi!','error');
      return nameRef.current.focus();
    }
    if (gender === '') {
      showMessage('Gender harus diisi!','error');
      return genderRef.current.focus();
    }
    if (phone === '') {
      showMessage('Telepon harus diisi!','error');
      return phoneRef.current.focus();
    }
    if (email === '') {
      showMessage('Email harus diisi!','error');
      return emailRef.current.focus();
    }
    if (password === '') {
      showMessage('Password harus diisi!','error');
      return passwordRef.current.focus();
    }
    if (passwordConfirmation === '') {
      showMessage('Konfirmasi Password harus diisi!','error');
      return passwordConfirmationRef.current.focus();
    }
    if (!validateEmail(email)) {
      showMessage('Email tidak valid!','error');
      return emailRef.current.focus();
    }
    if (password !== passwordConfirmation) {
      showMessage('Konfirmasi password tidak sama!','error');
      return passwordConfirmationRef.current.focus();
    }
    const payload = {
      name,
      email,
      phone,
      gender,
      password,
      password_confirmation: passwordConfirmation,
    };
    try {
      setName('');
      setPhone('');
      setGender('');
      setEmail('');
      setPassword('');
      setPasswordConfirmation('');
      if (await postRegister(payload)) {
        setLoading(false);
        navigation.navigate('SignIn');
      }
    } catch (error) {
      setLoading(false);
    }
  };
  return (
    <BoxContainer>
      <Header
        title="CEK-IN"
        subTitle="COVID ELECTRONIC INFORMATION"
        style={styles.header}
        back
        onPress={() => navigation.goBack()}
      />
      <KeyboardAvoidingView
        style={{ flex: 1, paddingHorizontal: 10 }}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      >
        <ScrollView>
          <Gap height={20} />
          <Text style={{ ...FONT_MEDIUM(24), textAlign: 'center' }}>
            Daftar
          </Text>
          <Gap height={20} />
          <Input
            placeholder="Nama Lengkap"
            value={name}
            onChangeText={(value: any) => setName(value)}
            forwardedRef={nameRef}
          />
          <Gap height={20} />
          <TouchableOpacity
            activeOpacity={1}
            onPress={() => setIsVisible(!isVisible)}
          >
            <Input
              placeholder={
                gender == 'L'
                  ? 'Laki-Laki'
                  : gender == 'P'
                  ? 'Perempuan'
                  : 'Pilih Jenis Kelamin'
              }
              onPress={() => setIsVisible(!isVisible)}
              disable
              iconRight="caret-down"
              value={gender == 'L' ? 'Laki-Laki' : 'Perempuan'}
              forwardedRef={genderRef}
            />
          </TouchableOpacity>
          <Gap height={20} />
          <Input
            placeholder="Telepon"
            keyboardType="phone-pad"
            value={phone}
            onChangeText={(value: any) => setPhone(value)}
            forwardedRef={phoneRef}
          />
          <Gap height={20} />
          <Input
            placeholder="Email"
            keyboardType="email-address"
            value={email}
            onChangeText={(value: any) => setEmail(value)}
            forwardedRef={emailRef}
          />
          <Gap height={20} />
          <Input
            secureTextEntry={showPassword}
            iconRight={showPassword ? 'eye' : 'eye-slash'}
            returnKeyType="done"
            placeholder="Password"
            onPress={() => tooglePassword()}
            value={password}
            onChangeText={(value: any) => setPassword(value)}
            forwardedRef={passwordRef}
          />
          <Gap height={20} />
          <Input
            secureTextEntry={showPassword}
            returnKeyType="done"
            placeholder="Konfirmasi Password"
            value={passwordConfirmation}
            onChangeText={(value: any) => setPasswordConfirmation(value)}
            forwardedRef={passwordConfirmationRef}
          />
          <Gap height={20} />

          <Gap height={40} />
          <Button onPress={_handleRegister}>
            {!loading ? <ActivityIndicator size="large" /> : 'Daftar'}
          </Button>
          <Gap height={40} />
        </ScrollView>
      </KeyboardAvoidingView>
      <BottomSheet
        isVisible={isVisible}
        containerStyle={{ backgroundColor: 'rgba(0.5, 0.25, 0, 0.2)' }}
      >
        {list.map((l, i) => (
          <ListItem
            key={i}
            containerStyle={l.containerStyle}
            onPress={l.onPress}
          >
            <ListItem.Content>
              <ListItem.Title style={l.titleStyle}>{l.title}</ListItem.Title>
            </ListItem.Content>
          </ListItem>
        ))}
      </BottomSheet>
    </BoxContainer>
  );
};

export default SignUp;

const styles = StyleSheet.create({
  header: { paddingHorizontal: 10, paddingTop: 15 },
});
