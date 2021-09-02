import { AddPayload, ITask } from '../../Constants';
import { ADD_TASK, TOGGLE_TASK, DELETE_TASK, UPDATE_TASK } from './types';

let nextId = 1;

/*
 ** reducer에 전달할 action의 type, payload 생성
 */

export const createTask = (content: string) => ({
  type: ADD_TASK,
  payload: {
    id: nextId++,
    content,
  },
});

export const toggleTask = (id: number): { type: string; payload: number } => ({
  type: TOGGLE_TASK,
  payload: id,
});

export const removeTask = (id: number): { type: string; payload: number } => ({
  type: DELETE_TASK,
  payload: id,
});

export const updateTask = (item: ITask): { type: string; payload: ITask } => ({
  type: UPDATE_TASK,
  payload: item,
});
