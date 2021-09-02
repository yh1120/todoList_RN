import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components/native';
import { removeTask, toggleTask, updateTask } from '../Store/actions/tasks';
import { RootState } from '../Store/reducers';
import { ITask, IWidth, WIDTH } from '../Constants';
import Task from './Task';

const TaskList = () => {
  const width = WIDTH;

  /*
   ** useSelector를 통해 redux stor에서 state를 가져옴
   */

  const tasks = useSelector((state: RootState) => state.tasks);

  const storedTasks = tasks.todoList;

  /*
   ** action을 진행하게 만드는 dispatch 함수 실행
   ** removeTask : id와 같은 Task 삭제 type 반환
   ** toggleTask : id의 isChecked toggle type 반환
   ** updateTask : 수정하고자 하는 item type 반환
   */

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
