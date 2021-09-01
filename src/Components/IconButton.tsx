import React from 'react';
import { Pressable } from 'react-native';
import styled, { DefaultTheme } from 'styled-components/native';
import { IIconButton } from '../Constants';

const IconButton: React.FC<IIconButton> = ({
  type,
  id,
  onPressOut = () => {},
  ischecked,
}) => {
  const pressOut = () => {
    onPressOut(id);
  };
  return (
    <Pressable onPressOut={pressOut}>
      <Icon source={type} ischecked={ischecked} />
    </Pressable>
  );
};

const Icon = styled.Image`
  tint-color: ${({
    theme,
    ischecked,
  }: {
    theme: DefaultTheme;
    ischecked: boolean;
  }) => (ischecked ? theme.done : theme.text)};
  width: 30px;
  height: 30px;
  margin: 10px;
`;

export default IconButton;
