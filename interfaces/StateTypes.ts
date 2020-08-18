import { ListTypes } from './ListTypes';
import { TaskTypes } from './TaskTypes';
import { LabelsTypes } from './LabelsTypes';

export interface StateTypes {
  lists: ListTypes[],
  tasks: TaskTypes [],
  update: boolean,
  data: number,
  isPopOverTask: boolean,
  labels: LabelsTypes[]
}
