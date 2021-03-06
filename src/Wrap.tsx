import React, { useState } from 'react';
import { StatusBar } from 'react-native';
import styled, { ThemeProvider } from 'styled-components/native';
import { theme } from './Styles/theme';
import { createTask } from './Store/actions/tasks';
import { Input, TaskList } from './Components';
import { IWidth } from './Constants';
import { useDispatch } from 'react-redux';

export default function Wrap() {
  const [newTask, setNewTask] = useState<string>('');

  const dispatch = useDispatch();

  /*
   ** createTask: content를 함는 새로운 Task 생성
   */

  const handleCreate = () => {
    dispatch(createTask(newTask));
    setNewTask('');
  };

  /*
   ** Input의 문자열이 변화할때마다 감지하고 저장
   */

  const handleChangeText = (text: string) => {
    setNewTask(text);
  };

  /*
   ** Input 입력 중 Input 외 선택시 Input 취소
   */

  const onBlur = () => {
    setNewTask('');
  };

  return (
    <ThemeProvider theme={theme}>
      <Container>
        <StatusBar
          barStyle="light-content"
          backgroundColor={theme.background}
        />
        <Title>TODO List</Title>
        <Input
          placeholder="+ Add a Task"
          value={newTask}
          onChangeText={handleChangeText}
          onSubmitEditing={handleCreate}
          onBlur={onBlur}
        />
        <TaskList />
      </Container>
    </ThemeProvider>
  );
}

const Container = styled.SafeAreaView`
  flex: 1;
  background-color: ${({ theme }) => theme.background};
  align-items: center;
  justify-content: flex-start;
`;

const Title = styled.Text`
  font-size: 40px;
  font-weight: 600;
  color: ${({ theme }) => theme.main};
  align-self: flex-start;
  margin: 0px 20px;
`;

const List = styled.ScrollView`
  flex: 1;
  width: ${({ width }: IWidth) => width - 40}px;
`;
