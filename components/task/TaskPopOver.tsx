import React from 'react';
import styles from './styles/Task.module.scss';
import { TaskTypes } from '../../interfaces/TaskTypes';
import TaskHeader from './TaskHeader';
import TaskSidebar from './TaskSidebar';

interface TaskPopOverTypes {
  task: TaskTypes,
  popOverTask: (obj: { listId: number; id: number; title: string }) => void,
}

const TaskPopOver: React.FC<TaskPopOverTypes> = ({ task, popOverTask }): JSX.Element => (
    <div className={styles.taskPopOverWrapper}>
      <div className={styles.card}>
        <div onClick={() => popOverTask(task)} className={styles.cardClose}>&#10005;</div>
        <TaskHeader task={task}/>
        <TaskSidebar/>
      </div>
    </div>
);
export default TaskPopOver;
