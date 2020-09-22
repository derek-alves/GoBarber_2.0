import React,{useCallback, useRef}from 'react';
import {
  View,
  Image,
  KeyboardAvoidingView,
  Keyboard,  
  Platform,
  TextInput,
  Alert
} from 'react-native';

import * as Yup from 'yup';

import getValidationErrors from '../../utils/getValidationErrors';

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



interface SignInFormData{
  email:string;
  password:string;
}

const SignIn: React.FC = () => {

  const navigation = useNavigation();
  
  const formRef = useRef<FormHandles>(null);

  const passwordInputRef = useRef<TextInput>(null);

  const handleSignIn = useCallback(async(data: SignInFormData) => {
    try {

      formRef.current?.setErrors({});
        const schema = Yup.object().shape({
              email:Yup.string().required('E-mail obrigatório').email('Digite um e-mail várlido'),
              password:Yup.string().required('Senha obrigatória'),
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
          Alert.alert('Error na autenticação','Ocorreu um erro ao fazer login.');

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