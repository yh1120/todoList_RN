import { AddPayload, ITask } from '../../Constants';
import { ADD_TASK, TOGGLE_TASK, DELETE_TASK, UPDATE_TASK } from './types';

export let nextId = 1;

export const addTask = (
  content: string
): { type: string; payload: AddPayload } => ({
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

export const deleteTask = (id: number): { type: string; payload: number } => ({
  type: DELETE_TASK,
  payload: id,
});

export const updateTask = (item: ITask): { type: string; payload: ITask } => ({
  type: UPDATE_TASK,
  payload: item,
});
