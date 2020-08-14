import { actionTypes } from '../redux/constants/actionTypes';

// general types

export interface TaskTypes {
  id: number,
  listId: number,
  title: string,
}

export interface ListTypes {
  id: number,
  title: string,
}

export interface StateTypes {
  lists: ListTypes[],
  tasks: TaskTypes [],
  update: boolean,
}

// action types

interface addListAction {
  type: actionTypes.ADD_LIST,
  payload: string
}

interface deleteListAction {
  type: actionTypes.DELETE_LIST,
  payload: number
}

interface moveListAction {
  type: actionTypes.MOVE_LIST,
  payload: { idFrom: number, idTo: number}
}

interface addTaskAction {
  type: actionTypes.ADD_TASK,
  payload: { listId: number, title: string }
}

interface deleteTaskAction {
  type: actionTypes.DELETE_TASK,
  payload: number
}

interface moveTaskAction {
  type: actionTypes.MOVE_TASK,
  payload: {idFrom: number, idTo: number, targetListId: number}
}

export type Action =
  | addListAction
  | deleteListAction
  | moveListAction
  | addTaskAction
  | deleteTaskAction
  | moveTaskAction;
