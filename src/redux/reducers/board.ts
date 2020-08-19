import { actionTypes } from '../constants/actionTypes';
import { StateTypes } from '../../core/shared/interfaces/StateTypes';
import { TaskTypes } from '../../core/shared/interfaces/TaskTypes';
import { Action } from '../../core/shared/interfaces/Action';

const INITIAL_STATE: StateTypes = {
  lists: [],
  tasks: [],
  update: false,
  data: 0,
  isPopOverTask: false,
};

const moveTasks = (arr: TaskTypes[], idFrom: number, idTo: number,
  targetListId: number) => {
  const idToIndex = arr.findIndex((item) => item.id === idTo);
  const idFromIndex = arr.findIndex((item) => item.id === idFrom);
  arr[idFromIndex].listId = targetListId;
  arr.splice(idToIndex, 0, arr.splice(idFromIndex, 1)[0]);
  return arr;
};

export const board = (state = INITIAL_STATE, action: Action): StateTypes => {
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
        tasks: state.tasks.filter((task) => task.listId !== action.payload),
      };

    case actionTypes.MOVE_LIST:
      return { ...state };

    case actionTypes.RENAME_LIST:
      return {
        ...state,
        lists: state.lists.map((list) => {
          if (list.id === action.payload.id) {
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
            description: '',
            labels: [],
            comments: [],
          },
        ],
      };

    case actionTypes.DELETE_TASK:
      return {
        ...state,
        tasks: state.tasks.filter((task) => task.id !== action.payload),
      };

    case actionTypes.MOVE_TASK:
      return {
        ...state,
        tasks: moveTasks(state.tasks, action.payload.idFrom,
          action.payload.idTo, action.payload.targetListId),
        update: !state.update,
      };

    case actionTypes.RENAME_TASK:
      return {
        ...state,
        tasks: state.tasks.map((task) => {
          if (task.id === action.payload.id) {
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

    case actionTypes.ADD_LABEL_TASK:
      return {
        ...state,
        tasks: state.tasks.map((task) => {
          if (task.id === action.payload.taskId) {
            task.labels.push({
              id: Date.now(),
              taskId: action.payload.taskId,
              listId: action.payload.listId,
              title: action.payload.title,
              backgroundColor: action.payload.backgroundColor,
            });
          }
          return task;
        }),
      };

    case actionTypes.DELETE_LABEL_TASK: {
      return {
        ...state,
        tasks: state.tasks.map((task) => {
          if (task.id === action.payload.taskId) {
            const index = task.labels.findIndex((item) => item.id === action.payload.id);
            task.labels.splice(index, 1);
          }
          return task;
        }),
      };
    }

    case actionTypes.EDIT_DESCRIPTION: {
      return {
        ...state,
        tasks: state.tasks.map((task) => {
          if (task.id === action.payload.id) {
            task.description = action.payload.description;
          }
          return task;
        }),
      };
    }

    case actionTypes.ADD_COMMENT: {
      return {
        ...state,
        tasks: state.tasks.map((task) => {
          if (task.id === action.payload.taskId) {
            task.comments.push({
              id: Date.now(),
              taskId: action.payload.taskId,
              comment: action.payload.comment,
            });
          }
          return task;
        }),
      };
    }

    case actionTypes.DELETE_COMMENT: {
      return {
        ...state,
        tasks: state.tasks.map((task) => {
          if (task.id === action.payload.taskId) {
            const index = task.comments.findIndex((item) => item.id !== action.payload.commentId);
            task.comments.splice(index, 1);
          }
          return task;
        }),
      };
    }

    default:
      return state;
  }
};
