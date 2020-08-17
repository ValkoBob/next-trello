// action types

import { actionTypes } from '../redux/constants/actionTypes';
import { TaskTypes } from './TaskTypes';

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
  payload: { idFrom: number, idTo: number }
}

interface renameListAction {
  type: actionTypes.RENAME_LIST,
  payload: { id: number, newTitle: string }
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
  payload: { idFrom: number, idTo: number, targetListId: number }
}

interface renameTaskAction {
  type: actionTypes.RENAME_TASK,
  payload: { id: number, newTitle: string }
}

interface popOverTaskAction {
  type: actionTypes.POPOVER_TASK,
  payload: TaskTypes
}

export type Action =
  | addListAction
  | deleteListAction
  | moveListAction
  | renameListAction
  | addTaskAction
  | deleteTaskAction
  | moveTaskAction
  | renameTaskAction
  | popOverTaskAction;
