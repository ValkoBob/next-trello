import { Action, ListTypes } from '../../interfaces/interfaces';
import { actionTypes } from '../constants/actionTypes';


const INITIAL_STATE: ListTypes[] = [];

export const board = (state = INITIAL_STATE, action: Action): ListTypes[]=> {
  console.log(action.payload);
  switch (action.type) {
    case actionTypes.ADD_LIST:
      return [
        ...state,
        {
          id: Date.now(),
          position: board.length,
          title: action.payload,
          tasks: [],
        }
      ]
    case actionTypes.DELETE_LIST:
      return state.filter(list => list.id !== action.payload);
    case actionTypes.ADD_TASK:
      return state.map(list => {
        if(action.payload.listId === list.id) {
          list.tasks.push({
            id: Date.now(),
            listId: action.payload.listId,
            position: list.tasks.length,
            title: action.payload.title,
          })
        }
        return list;
      })
    default:
      return state;
  }
};
