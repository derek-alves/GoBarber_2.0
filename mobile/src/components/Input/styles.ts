import styled from 'styled-components/native';

import {Feather} from '@expo/vector-icons';


export const Container = styled.View`
  width:100%;
  height:60px;
  padding:0 16px;
  background:#232129;
  border-radius:10px;
  margin-bottom:8px;
  
  flex-direction:row;
  align-items:center;
`;

export const Icon = styled(Feather)`
  margin-right:16px;
`;

export const TextInput = styled.TextInput`
  flex:1;
  color:#FFF;
  font-size:16px;
  font-family:'RobotoSlab_400Regular'
`;



