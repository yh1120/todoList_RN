import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components/native';
import { removeTask, toggleTask, updateTask } from '../Store/actions/tasks';
import { RootState } from '../Store/reducers';
import { ITask, IWidth, WIDTH } from '../Constants';
import Task from './Task';

const TaskList = () => {
  const width = WIDTH;

  const tasks = useSelector((state: RootState) => state.tasks);

  const storedTasks = tasks.todoList;

  const dispatch = useDispatch();

  const handleDelete = (id: number) => {
    dispatch(removeTask(id));
  };

  const handleToggle = (id: number) => {
    dispatch(toggleTask(id));
  };

  const handleUpdate = (item: ITask) => {
    dispatch(updateTask(item));
  };

  return (
    <List width={width}>
      {storedTasks.map((item) => (
        <Task
          key={item.id}
          item={item}
          deleteTask={handleDelete}
          toggleTask={handleToggle}
          updateTask={handleUpdate}
        />
      ))}
    </List>
  );
};

const List = styled.ScrollView`
  flex: 1;
  width: ${({ width }: IWidth) => width - 40}px;
`;

export default TaskList;
