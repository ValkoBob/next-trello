import React from 'react';
import styles from './styles/Task.module.scss';
import TaskLabels from './TaskLabels';

const TaskSidebar = () => {
  return (
    <div className={styles.cardSidebar}>
      <div className={styles.cardSidebar_item}>Labels</div>
      <TaskLabels/>
    </div>
  );
};

export default TaskSidebar;
