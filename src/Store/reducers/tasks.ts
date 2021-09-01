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

const tasks = (state: TaskState = initialState, action: TasksAction) => {
  switch (action.type) {
    case ADD_TASK: {
      return state.todoList.concat({
        id: action.payload.id,
        content: action.payload.content,
        ischecked: false,
        createdAt: newDate(),
      });
    }
    case TOGGLE_TASK: {
      return state.todoList.map((task: ITask) =>
        task.id === action.payload.id
          ? { ...task, ischecked: !task.ischecked }
          : task
      );
    }
    case DELETE_TASK: {
      return state.todoList.filter((task: ITask) => {
        task.id !== action.payload.id;
      });
    }
    case UPDATE_TASK: {
      return state.todoList.map((task: ITask) =>
        task.id === action.payload.item.id ? action.payload.item : task
      );
    }
  }
};

export default tasks;
