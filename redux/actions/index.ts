import { actionTypes } from '../constants/actionTypes';

export const addList = (title: string) => {
  return {
    type: actionTypes.ADD_LIST,
    payload: title,
  };
};

export const deleteList = (id: number) => {
  return {
    type: actionTypes.DELETE_LIST,
    payload: id,
  };
};

export const moveList = (id: number) => {
  return {
    type: actionTypes.MOVE_LIST,
    payload: id,
  };
};

export const addTask = (listId: number, title: string) => {
  return {
    type: actionTypes.ADD_TASK,
    payload: { listId, title },
  };
};

export const deleteTask = (id: number) => {
  return {
    type: actionTypes.DELETE_TASK,
    payload: id,
  };
};

export const moveTask = (id: number) => {
  return {
    type: actionTypes.MOVE_TASK,
    payload: id,
  };
};


