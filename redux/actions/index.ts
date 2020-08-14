import { actionTypes } from '../constants/actionTypes';

export const addList = (title: string) => ({
  type: actionTypes.ADD_LIST,
  payload: title,
});

export const deleteList = (id: number) => ({
  type: actionTypes.DELETE_LIST,
  payload: id,
});

export const moveList = (idFrom: number, idTo: number) => ({
  type: actionTypes.MOVE_LIST,
  payload: { idFrom, idTo },
});

export const addTask = (listId: number, title: string) => ({
  type: actionTypes.ADD_TASK,
  payload: { listId, title },
});

export const deleteTask = (id: number) => ({
  type: actionTypes.DELETE_TASK,
  payload: id,
});

export const moveTask = (idFrom: number, idTo: number, targetListId: number) => ({
  type: actionTypes.MOVE_TASK,
  payload: { idFrom, idTo, targetListId },
});
