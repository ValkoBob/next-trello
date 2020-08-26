import React from 'react';
import styles from './styles/taskPopOver.module.scss';
import TaskHeader from '../taskHeader';
import TaskSidebar from '../taskSidebar';
import TaskContent from '../taskContent';

interface TaskPopOverTypes {
  taskId: number,
  popOverTask: (id: number) => void,
}

const TaskPopOver: React.FC<TaskPopOverTypes> = ({ taskId, popOverTask }): JSX.Element => (
    <div className={styles.taskPopOverWrapper}>
      <div className={styles.card}>
        <div onClick={() => popOverTask(taskId)} className={styles.cardClose}>&#10005;</div>
        <TaskHeader taskId={taskId}/>
        <TaskContent currentTaskId={taskId}/>
        <TaskSidebar taskId={taskId}/>
      </div>
    </div>
);
export default TaskPopOver;
