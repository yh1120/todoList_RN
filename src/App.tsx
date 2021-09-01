import React, { useState } from 'react';
import { Dimensions, FlatList, StatusBar, Text } from 'react-native';
import styled, { ThemeProvider } from 'styled-components/native';
import { theme } from './Styles/theme';
import { Input, Task } from './Components';
import { IWidth, ITask, WIDTH } from './Constants';

export default function App() {
  const width = WIDTH;
  const [newTask, setNewTask] = useState<string>('');
  const [tasks, setTasks] = useState<ITask[]>([
    {
      id: 1,
      content: 'hello',
      ischecked: false,
      createdAt: '2021-05-26T11:51:05.097Z',
    },
    {
      id: 2,
      content: 'this',
      ischecked: true,
      createdAt: '2021-05-26T11:51:05.097Z',
    },
    {
      id: 3,
      content: 'is',
      ischecked: false,
      createdAt: '2021-05-26T11:51:05.097Z',
    },
    {
      id: 4,
      content: 'todolist',
      ischecked: false,
      createdAt: '2021-05-26T11:51:05.097Z',
    },
  ]);

  const addTask = () => {
    const date = new Date();
    const nextId = tasks.reduce((accumulator: number, currentValue: ITask) => {
      if (currentValue.id >= accumulator) {
        return currentValue.id;
      }
      return accumulator;
    }, 0);
    setTasks((prevTasks: ITask[]) =>
      prevTasks.concat({
        id: nextId + 1,
        content: newTask,
        ischecked: false,
        createdAt: date.toISOString(),
      })
    );
    setNewTask('');
  };

  const deleteTask = (id: number) => {
    setTasks((prevTask: ITask[]) =>
      prevTask.filter((item: ITask) => item.id !== id)
    );
  };

  const toggleTask = (id: number) => {
    setTasks((prevTask) =>
      prevTask.map((task: ITask) =>
        task.id === id ? { ...task, ischecked: !task.ischecked } : task
      )
    );
  };

  const updateTask = (item: ITask) => {
    setTasks((prevTask) =>
      prevTask.map((task: ITask) => (task.id === item.id ? item : task))
    );
  };

  const handleChangeText = (text: string) => {
    setNewTask(text);
  };

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
          onSubmitEditing={addTask}
          onBlur={onBlur}
        />
        <List width={width}>
          {tasks.map((item) => (
            <Task
              key={item.id}
              item={item}
              deleteTask={deleteTask}
              toggleTask={toggleTask}
              updateTask={updateTask}
            />
          ))}
        </List>
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
