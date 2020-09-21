import React,{useCallback, useRef}from 'react';
import {
  View,
  Image,
  KeyboardAvoidingView,
  Keyboard,  
  Platform,
  TextInput
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

  const passwordInputRef = useRef<TextInput>(null);

  const handleSignIn = useCallback((data:Object) => {
    console.log(data)
  },[])

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

      <Form ref={formRef} onSubmit={handleSignIn}>  
          <Input
            autoCorrect={false}
            autoCapitalize="none"
            keyboardType="email-address"
            name="email" 
            icon="mail" 
            placeholder="E-mail"
            returnKeyType="next"
            onSubmitEditing={() => {
              passwordInputRef.current?.focus();
            }}
          />
          <Input 
            ref={passwordInputRef}
            name="password" 
            icon="lock"
            placeholder="Senha"
            secureTextEntry
            returnKeyType="send"
            onSubmitEditing={()=>{
              formRef.current?.submitForm();
            }}
          />
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