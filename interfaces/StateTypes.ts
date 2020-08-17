import { ListTypes } from './ListTypes';
import { TaskTypes } from './TaskTypes';

export interface StateTypes {
  lists: ListTypes[],
  tasks: TaskTypes [],
  update: boolean,
  data: TaskTypes,
  isPopOverTask: boolean,
}
