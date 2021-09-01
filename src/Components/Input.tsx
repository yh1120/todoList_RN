import React from 'react';
import styled from 'styled-components/native';
import { Dimensions } from 'react-native';

interface IWidth {
  width: number;
}
interface IInput {
  placeholder: string;
}

const Input = ({ placeholder }: IInput) => {
  const width = Dimensions.get('window').width;
  return (
    <StyledInput
      width={width}
      autoCapitalize="none"
      autoCorrect={false}
      returnKeyType="done"
      keyboardAppearance="dark"
    />
  );
};

const StyledInput = styled.TextInput`
  width: ${({ width }: { width: number }) => width - 40}px;
  height: 60px;
  margin: 3px 0;
  padding: 15px 20px;
  border-radius: 10px;
  background-color: ${({ theme }) => theme.itemBackground};
  font-size: 25px;
  color: ${({ theme }) => theme.text};
`;

export default Input;
