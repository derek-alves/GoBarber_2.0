import React from 'react';
import {
  View,
  Image,
  KeyboardAvoidingView,
  Keyboard,  
  Platform
} from 'react-native';

import {Feather as Icon} from '@expo/vector-icons';

import Input from '../../components/Input';
import Button from '../../components/Button';

import logoImg from '../../assets/logo.png';

import { 
  Container,
  Title,
  ForgotPassWord,
  ForgotPassWordText,
  CreateAccountButton,
  CreateAccountButtonText
} from './styles';
import { ScrollView } from 'react-native-gesture-handler';

const SignIn: React.FC = () => {
  return (

    <>
      <KeyboardAvoidingView
       style={{flex:1}}
      behavior={Platform.OS === 'ios' ? 'padding': undefined}
      enabled
      >
      <ScrollView
      contentContainerStyle={{flex:1}}
      keyboardShouldPersistTaps="handled"
      >
        <Container>
          <Image source={logoImg}/>

          <View> 
            <Title>Faça seu logon</Title>
          </View> 

          <Input name="email" icon="mail" placeholder="E-mail"/>
          <Input name="password" icon="lock" placeholder="Senha"/>
        
          <Button onPress={()=>{}}>Entrar</Button>

          <ForgotPassWord onPress={()=>{}}>
              <ForgotPassWordText>
                Esqueci minha senha
              </ForgotPassWordText>
          </ForgotPassWord>
        </Container>
      </ScrollView>
    </KeyboardAvoidingView>  

        <CreateAccountButton onPress={()=>{}}>
            <Icon name="log-in" size={20} color="#ff9000"/>
            <CreateAccountButtonText>
                Criar uma conta
            </CreateAccountButtonText>
        </CreateAccountButton>
    </>
  );
}

export default SignIn;