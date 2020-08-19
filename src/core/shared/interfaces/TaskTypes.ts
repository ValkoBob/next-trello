import { LabelsTypes } from './LabelsTypes';
import { CommentTypes } from './CommentTypes';

export interface TaskTypes {
  id: number,
  listId: number,
  title: string,
  description: string,
  labels: LabelsTypes[],
  comments: CommentTypes[],
}
