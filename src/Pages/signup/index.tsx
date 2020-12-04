import React from 'react';

import {
  Image,
  View,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

import { useNavigation } from '@react-navigation/native';

import Input from '../../components/Input';
import Button from '../../components/Button';

import logoImg from '../../assets/logo.png';

import { Container, Title, BackTosignIn, BackTosignInText } from './styles';

const SignUp: React.FC = () => {
  const navigation = useNavigation();

  return (
    <>
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        enabled
      >
        <ScrollView
          keyboardShouldPersistTaps="handled"
          contentContainerStyle={{ flex: 1 }}
        >
          <Container>
            <Image source={logoImg} />
            <View>
              <Title>Crie sua conta</Title>
            </View>
            <Input name="name" icon="user" placeholder="Nome" />

            <Input name="email" icon="mail" placeholder="E-mail" />

            <Input name="email" icon="lock" placeholder="Senha" />

            <Button
              onPress={() => {
                console.log('Deu... foda-se');
              }}
            >
              Entrar
            </Button>
          </Container>
        </ScrollView>
      </KeyboardAvoidingView>

      <BackTosignIn onPress={() => navigation.goBack()}>
        <Icon name="arrow-left" size={20} color="#fff" />
        <BackTosignInText>Voltar para login</BackTosignInText>
      </BackTosignIn>
    </>
  );
};

export default SignUp;
