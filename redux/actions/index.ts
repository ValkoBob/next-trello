import { actionTypes } from '../constants/actionTypes';
import { TaskTypes } from '../../interfaces/TaskTypes';

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

export const renameList = (id: number, newTitle: string) => ({
  type: actionTypes.RENAME_LIST,
  payload: { id, newTitle },
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

export const renameTask = (id: number, newTitle: string) => ({
  type: actionTypes.RENAME_TASK,
  payload: { id, newTitle },
});

export const popOverTask = (data?: TaskTypes) => ({
  type: actionTypes.POPOVER_TASK,
  payload: data,
});
