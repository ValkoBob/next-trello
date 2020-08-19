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

export const popOverTask = (id: number) => ({
  type: actionTypes.POPOVER_TASK,
  payload: id,
});

export const addLabelTask = (taskId: number, listId: number, title: string, backgroundColor: string) => ({
  type: actionTypes.ADD_LABEL_TASK,
  payload: {
    taskId, listId, title, backgroundColor,
  },
});

export const deleteLabelTask = (taskId: number, id: number) => ({
  type: actionTypes.DELETE_LABEL_TASK,
  payload: { taskId, id },
});

export const editDescription = (id: number, description: string) => ({
  type: actionTypes.EDIT_DESCRIPTION,
  payload: { id, description },
});

export const addComment = (taskId: number, comment: string) => ({
  type: actionTypes.ADD_COMMENT,
  payload: { taskId, comment },
});

export const deleteComment = (taskId: number, commentId: number) => ({
  type: actionTypes.ADD_COMMENT,
  payload: { taskId, commentId },
});
