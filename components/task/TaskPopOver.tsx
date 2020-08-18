import React from 'react';
import styles from './styles/Task.module.scss';
import TaskHeader from './TaskHeader';
import TaskSidebar from './TaskSidebar';
import TaskContent from './TaskContent';

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
