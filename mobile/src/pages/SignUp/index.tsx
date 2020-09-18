import React,{useRef} from 'react';
import {
  View,
  Image,
  KeyboardAvoidingView,
  Keyboard,  
  Platform
} from 'react-native';

import {Feather as Icon} from '@expo/vector-icons';
import {Form} from '@unform/mobile';
import {FormHandles} from '@unform/core';


import Input from '../../components/Input';
import Button from '../../components/Button';

import logoImg from '../../assets/logo.png';

import { 
  Container,
  Title,  
  BackToSignIn,
  BackToSignInText
} from './styles';
import { ScrollView } from 'react-native-gesture-handler';
import {useNavigation} from '@react-navigation/native';



const SignUp: React.FC = () => {

  const formRef = useRef<FormHandles>(null);
  const navigation = useNavigation();

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
            <Title>Crie sua conta</Title>
          </View> 

        <Form ref={formRef} onSubmit={()=>{}}>  
          <Input name="name" icon="user" placeholder="Nome"/>
          <Input name="email" icon="mail" placeholder="E-mail"/>
          <Input name="password" icon="lock" placeholder="Senha"/>
        </Form>
          <Button onPress={()=>formRef.current?.submitForm()}>Entrar</Button>

  
        </Container>
      </ScrollView>

      <BackToSignIn onPress={()=> navigation.goBack()}>
            <Icon name="arrow-left" size={20} color="#fff"/>
            <BackToSignInText>
                Voltar para logon
            </BackToSignInText>
        </BackToSignIn>
    </KeyboardAvoidingView>  

       
    </>
  );
}

export default SignUp;