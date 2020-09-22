import React,{useRef,useCallback} from 'react';
import {
  View,
  Image,
  KeyboardAvoidingView,
  Keyboard,  
  Platform,
  TextInput, Alert
} from 'react-native';

import {Feather as Icon} from '@expo/vector-icons';
import {Form} from '@unform/mobile';
import {FormHandles} from '@unform/core';

import * as Yup from 'yup';

import getValidationErrors from '../../utils/getValidationErrors';


import Input from '../../components/Input';
import Button from '../../components/Button';

import logoImg from '../../assets/logo.png';

import { 
  Container,
  Title,  
  BackToSignIn,
  BackToSignInText
} from './styles';
import { ScrollView} from 'react-native-gesture-handler';
import {useNavigation} from '@react-navigation/native';

interface SignUpFormData{
  name:string;
  email:string;
  password:string;
}

const SignUp: React.FC = () => {

  const formRef = useRef<FormHandles>(null);
  const navigation = useNavigation();

  const emailInputRef = useRef<TextInput>(null);
  const passwordInputRef = useRef<TextInput>(null);

  const handleSignUp = useCallback(async(data: SignUpFormData) => {
    try {

      formRef.current?.setErrors({});
        const schema = Yup.object().shape({
              name:Yup.string().required('Nome obrigatório'),
              email:Yup.string().required('E-mail obrigatório').email('Digite um e-mail várlido'),
              password:Yup.string().min(6,'No mínimo 6 dígitos'),
            });

            await schema.validate(data,{
              abortEarly:false
            });

          } catch (error) {
            if(error instanceof Yup.ValidationError){
            const errors = getValidationErrors(error);
            formRef.current?.setErrors(errors);

            return;
          }

          Alert.alert('Erro no cadastro','Ocorreu um erro ao fazer cadastro, tente novamente');
        }
  },[]);

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

        <Form ref={formRef} onSubmit={handleSignUp}>  
          <Input 
          autoCapitalize="words" 
          name="name" icon="user" 
          placeholder="Nome" 
          returnKeyType="next" 
          onSubmitEditing={()=>{
            emailInputRef.current?.focus();
          }}
          />
          <Input 
          ref={emailInputRef} 
          keyboardType="email-address" 
          autoCapitalize="none" 
          autoCorrect={false} 
          name="email" icon="mail" 
          placeholder="E-mail" 
          returnKeyType="next"
          onSubmitEditing={()=>{
            passwordInputRef.current?.focus();
          }}
          />
          <Input 
          ref={passwordInputRef} 
          secureTextEntry 
          textContentType="newPassword" 
          name="password" icon="lock" 
          placeholder="Senha" 
          returnKeyType="send" 
          onSubmitEditing={() => formRef.current?.submitForm()}/>
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