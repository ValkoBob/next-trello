import {
  Action, ListTypes, StateTypes, TaskTypes,
} from '../../interfaces/interfaces';
import { actionTypes } from '../constants/actionTypes';

const INITIAL_STATE: StateTypes = {
  lists: [],
  tasks: [],
  update: false,
};

const moveTasks = (arr: TaskTypes[], idFrom: number, idTo: number,
  targetListId: number) => {
  const idToIndex = arr.findIndex((item) => item.id === idTo);
  const idFromIndex = arr.findIndex((item) => item.id === idFrom);
  // eslint-disable-next-line no-param-reassign
  arr[idFromIndex].listId = targetListId;
  arr.splice(idToIndex, 0, arr.splice(idFromIndex, 1)[0]);
  return arr;
};

const moveLists = (arr: ListTypes[], idFrom: number, idTo: number) => {
  const idToIndex = arr.findIndex((item) => item.id === idTo);
  const idFromIndex = arr.findIndex((item) => item.id === idFrom);
  arr.splice(idToIndex, 0, arr.splice(idFromIndex, 1)[0]);
  return arr;
};

export const board = (state = INITIAL_STATE, action: Action): StateTypes => {
  console.log(action.payload);
  switch (action.type) {
    case actionTypes.ADD_LIST:
      return {
        ...state,
        lists: [...state.lists, {
          id: Date.now(),
          title: action.payload,
        }],
      };
    case actionTypes.DELETE_LIST:
      return {
        ...state,
        lists: state.lists.filter((list) => list.id !== action.payload),
      };
    case actionTypes.MOVE_LIST:
      // eslint-disable-next-line no-case-declarations
      const updatedLists = moveLists(state.lists, action.payload.idFrom, action.payload.idTo);
      return {
        ...state,
        lists: updatedLists,
        update: !state.update,
      };
    case actionTypes.ADD_TASK:
      return {
        ...state,
        tasks: [
          ...state.tasks,
          {
            id: Date.now(),
            listId: action.payload.listId,
            title: action.payload.title,
          },
        ],
      };
    case actionTypes.DELETE_TASK:
      return {
        ...state,
        tasks: state.tasks.filter((task) => task.id !== action.payload),
      };
    case actionTypes.MOVE_TASK:
      // eslint-disable-next-line no-case-declarations
      const updatedTasks = moveTasks(state.tasks, action.payload.idFrom,
        action.payload.idTo, action.payload.targetListId);
      return {
        ...state,
        tasks: updatedTasks,
        update: !state.update,
      };
    default:
      return state;
  }
};
