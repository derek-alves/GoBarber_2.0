import React,{useCallback, useRef}from 'react';
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
import {useNavigation} from '@react-navigation/native';
import {Form} from '@unform/mobile';
import {FormHandles} from '@unform/core';

const SignIn: React.FC = () => {

  const navigation = useNavigation();
  
  const formRef = useRef<FormHandles>(null);

  const handleSignIn = useCallback((data:Object) => {},[])

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

      <Form ref={formRef} onSubmit={()=>{}}>  
          <Input name="email" icon="mail" placeholder="E-mail"/>
          <Input name="password" icon="lock" placeholder="Senha"/>
      </Form>
          <Button onPress={()=>{
            formRef.current?.submitForm();
          }}>Entrar</Button>
     

      
          <ForgotPassWord onPress={()=>{}}>
              <ForgotPassWordText>
                Esqueci minha senha
              </ForgotPassWordText>
          </ForgotPassWord>
       
        </Container>
      </ScrollView>
    </KeyboardAvoidingView>  

        <CreateAccountButton onPress={()=>navigation.navigate('SignUp')}>
            <Icon name="log-in" size={20} color="#ff9000"/>
            <CreateAccountButtonText>
                Criar uma conta
            </CreateAccountButtonText>
        </CreateAccountButton>
    </>
  );
}

export default SignIn;