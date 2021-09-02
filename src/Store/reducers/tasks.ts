import { ActionSheetIOS } from 'react-native';
import { TasksAction, TaskState, newDate, ITask } from '../../Constants';
import {
  ADD_TASK,
  DELETE_TASK,
  TOGGLE_TASK,
  UPDATE_TASK,
} from '../actions/types';

const initialState: TaskState = {
  count: 0,
  todoList: [],
};

/*
 ** action.type에 따른 실행 함수 작성.
 ** 각각 생성, 토글, 삭제, 수정된 TaskState를 반환한다.
 */

const tasks = (state: TaskState = initialState, action: TasksAction) => {
  switch (action.type) {
    case ADD_TASK: {
      const temp = state.todoList.concat({
        id: action.payload.id,
        content: action.payload.content,
        ischecked: false,
        createdAt: newDate(),
      });
      return {
        count: state.todoList.length + 1,
        todoList: temp,
      };
    }
    case TOGGLE_TASK: {
      const temp = state.todoList.map((task: ITask) =>
        task.id === action.payload
          ? { ...task, ischecked: !task.ischecked }
          : task
      );
      return {
        count: state.count,
        todoList: temp,
      };
    }
    case DELETE_TASK: {
      const temp = state.todoList.filter((task: ITask) => {
        if (task.id !== action.payload) {
          return task;
        }
      });
      return {
        count: state.count - 1,
        todoList: temp,
      };
    }
    case UPDATE_TASK: {
      const temp = state.todoList.map((task: ITask) => {
        const id: number = action.payload.id;
        const content: string = action.payload.content;
        return task.id === id ? { ...task, content: content } : task;
      });
      return {
        count: state.count,
        todoList: temp,
      };
    }
    default:
      return state;
  }
};

export default tasks;
