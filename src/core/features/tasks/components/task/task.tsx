import React from 'react';
import styles from './styles/Task.module.scss';
import { TaskTypes } from '../../../../shared/interfaces/TaskTypes';

interface TaskComponentTypes {
  task: TaskTypes,
  onDragStart: (e: { dataTransfer: { setData: (arg0: string, arg1: string) => void } }, currentId: string) => void,
  deleteTask: (id: number) => void,
  popOverTask: (id: number) => void,
}

const Task: React.FC<TaskComponentTypes> = ({ task, onDragStart, deleteTask, popOverTask, }): JSX.Element => {
  const { id, title, description, labels } = task;
  return (
  <div draggable={true}
       onDragStart={(e) => onDragStart(e, id.toString())}
       className={styles.task} id={id.toString()}>
    <div className={styles.taskButton} onClick={() => popOverTask(id)}>
      <div className={styles.taskMiniLabels}>
        {labels.map((label) => (id === label.taskId ? <span key={label.id}
                                     className={styles.taskMiniLabels_item}
                                     style={{ backgroundColor: label.backgroundColor }}/> : null))}
      </div>
      <span>{title}</span>
      {description !== '' ? <div className={styles.taskBadges}><span>&#9776;</span></div> : null}
    </div>
    <div onClick={() => deleteTask(id)} className={styles.taskDeleter}><span>&#10006;</span></div>
  </div>
  );
};

export default Task;
