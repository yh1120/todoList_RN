import React from 'react';
import styled, { DefaultTheme } from 'styled-components/native';
import IconButton from './IconButton';
import { images } from '../Constants';
import { ITaskComponent } from '../Constants/Type';

const Task: React.FC<ITaskComponent> = ({ item, deleteTask, toggleTask }) => {
  return (
    <Container>
      <IconButton
        type={item.ischecked ? images.completed : images.uncompleted}
        id={item.id}
        onPressOut={toggleTask}
        ischecked={item.ischecked}
      />
      <Contents ischecked={item.ischecked}>{item.content}</Contents>
      {!item.ischecked && <IconButton type={images.update} />}
      <IconButton
        type={images.delete}
        id={item.id}
        onPressOut={deleteTask}
        ischecked={item.ischecked}
      />
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
  color: ${({
    theme,
    ischecked,
  }: {
    theme: DefaultTheme;
    ischecked: boolean;
  }) => (ischecked ? theme.done : theme.text)};
  text-decoration-line: ${({ ischecked }) =>
    ischecked ? 'line-through' : 'none'};
`;

export default Task;
