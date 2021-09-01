import React from 'react';
import styled from 'styled-components/native';
import { Dimensions } from 'react-native';
import { IWidth, IInput } from '../Constants';

const Input: React.FC<IInput> = ({
  placeholder,
  value,
  onChangeText,
  onSubmitEditing,
}) => {
  const width = Dimensions.get('window').width;
  return (
    <StyledInput
      width={width}
      placeholder={placeholder}
      autoCapitalize="none"
      autoCorrect={false}
      returnKeyType="done"
      keyboardAppearance="dark"
      value={value}
      onChangeText={onChangeText}
      onSubmitEditing={onSubmitEditing}
    />
  );
};

const StyledInput = styled.TextInput.attrs(({ theme }) => ({
  placeholderTextColor: theme.main,
}))`
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
