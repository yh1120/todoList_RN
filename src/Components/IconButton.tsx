import React from 'react';
import { Pressable } from 'react-native';
import styled from 'styled-components/native';
import { IIconButton } from 'Constants';

const Icon = styled.Image`
  width: 30px;
  height: 30px;
`;

const IconButton: React.FC<IIconButton> = ({ type }) => {
  return (
    <Pressable>
      <Icon source={type} />
    </Pressable>
  );
};

export default IconButton;
