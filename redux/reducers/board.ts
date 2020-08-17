import { actionTypes } from '../constants/actionTypes';
import { StateTypes } from '../../interfaces/StateTypes';
import { TaskTypes } from '../../interfaces/TaskTypes';
import { ListTypes } from '../../interfaces/ListTypes';
import { Action } from '../../interfaces/Action';

const INITIAL_STATE: StateTypes = {
  lists: [],
  tasks: [],
  update: false,
  data: {
    id: 0,
    title: '',
    listId: 0,
  },
  isPopOverTask: false,
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

    case actionTypes.RENAME_LIST:
      return {
        ...state,
        lists: state.lists.map((list) => {
          if (list.id === action.payload.id) {
            // eslint-disable-next-line no-param-reassign
            list.title = action.payload.newTitle;
          }
          return list;
        }),
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

    case actionTypes.RENAME_TASK:
      return {
        ...state,
        tasks: state.tasks.map((task) => {
          if (task.id === action.payload.id) {
            // eslint-disable-next-line no-param-reassign
            task.title = action.payload.newTitle;
          }
          return task;
        }),
      };

    case actionTypes.POPOVER_TASK:
      return {
        ...state,
        data: action.payload,
        isPopOverTask: !state.isPopOverTask,
      };

    default:
      return state;
  }
};
