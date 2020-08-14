import { actionTypes } from '../redux/constants/actionTypes';

// general types

export interface TaskTypes {
  id: number,
  listId: number,
  position: number,
  title: string,
}

export interface ListTypes {
  id: number,
  position: number,
  title: string,
  tasks: TaskTypes []
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
  payload: number
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
