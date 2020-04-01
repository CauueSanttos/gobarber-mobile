import React from 'react';
import { Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import logo from '~/assets/logo.png';

import Background from '~/components/Background';

import {
  Container,
  Form,
  FormInput,
  SubmitButton,
  SignLink,
  SignLinkText,
} from './styles';

export default function SignUp() {
  const navigation = useNavigation();

  return (
    <Background>
      <Container>
        <Image source={logo} />

        <Form>
          <FormInput
            icon="person-outline"
            autoCorrect={false}
            autoCapitalize="none"
            placeholder="Nome completo"
          />

          <FormInput
            icon="mail-outline"
            keyboardType="email-address"
            autoCorrect={false}
            autoCapitalize="none"
            placeholder="Digite seu e-mail"
          />

          <FormInput
            icon="lock-outline"
            secureTextEntry
            placeholder="Sua senha secreta"
          />

          <SubmitButton onPress={() => {}}>Cadastrar</SubmitButton>

          <SignLink
            onPress={() => {
              navigation.goBack();
            }}
          >
            <SignLinkText>Já possuo conta.</SignLinkText>
          </SignLink>
        </Form>
      </Container>
    </Background>
  );
}
