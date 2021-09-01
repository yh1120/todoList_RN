import React from 'react';
import styled from 'styled-components/native';
import { IconButton } from 'Components';
import { images, ITask } from 'Constants';

const Task: React.FC<ITask> = ({ text }) => {
  return (
    <Container>
      <IconButton type={images.uncompleted} />
      <Contents>{text}</Contents>
      <IconButton type={images.update} />
      <IconButton type={images.delete} />
    </Container>
  );
};

const Container = styled.View`
  flex-direction: row;
  align-items: center;
  background-color: ${({ theme }) => theme.itemBackground};
  border-radius: 10px;
  padding: 5px;
  margin: 3px 0px;
`;

const Contents = styled.Text`
  flex: 1;
  font-size: 24px;
  color: ${({ theme }) => theme.text};
`;

export default Task;
