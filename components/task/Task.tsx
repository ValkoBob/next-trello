import React from 'react';
import { connect } from 'react-redux';
import styles from './styles/Task.module.scss';
import { deleteTask, renameTask, popOverTask } from '../../redux/actions';

interface TaskTypes {
  title: string,
  id: number,
  listId: number,
  onDragStart: (e: { dataTransfer: { setData: (arg0: string, arg1: string) => void } }, currentId: string) => void,
  deleteTask: (id: number) => void,
  renameTask: (id: number, newTitle: string) => void,
  popOverTask: (obj: { listId: number; id: number; title: string }) => void,
}

const Task: React.FC<TaskTypes> = ({
  title, id, listId, onDragStart, deleteTask, popOverTask,
}): JSX.Element => (
    <div draggable={true}
         onDragStart={(e) => onDragStart(e, id.toString())}
         className={styles.task} id={id.toString()}>
      <div className={styles.taskButton} onClick={() => popOverTask({ id, listId, title })}>
        {title}
      </div>
      <div onClick={() => deleteTask(id)} className={styles.taskDeleter}><span>&#10006;</span></div>
    </div>
);

export default connect(null, { deleteTask, renameTask, popOverTask })(Task);
