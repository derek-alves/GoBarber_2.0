import styled from 'styled-components/native';
import {Platform} from 'react-native';
import {getBottomSpace} from 'react-native-iphone-x-helper';

export const Container = styled.View`
  flex:1;
  align-items:center;
  justify-content:center;
  padding:0 30px ${Platform.OS === 'android'? 150 : 40}px;
`;

export const Title = styled.Text`
  font-size:24px;
  color:#f4ede8;
  font-family:'RobotoSlab_500Medium';
  margin:30px 0 24px;
`;

export const BackToSignIn = styled.TouchableOpacity`
  position:absolute;
  left:0;
  bottom: 0;
  right:0;
  background:#312e38;
  
  padding:5px 0 ${16 + getBottomSpace()}px;

  justify-content:center;
  align-items:center;
  flex-direction:row;
`;

export const CreateAccountButtonText = styled.Text`
  color:#ff9000;
  font-size:18px;
  font-family:'RobotoSlab_400Regular';
  margin-left:16px;
`; 

export const BackToSignInText = styled.Text`
  color:#FFF;
  font-size:16px;
  font-family:'RobotoSlab_400Regular'
`;

