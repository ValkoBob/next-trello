import React, { useState } from 'react';
import styles from './styles/taskSidebar.module.scss';
import TaskLabelsCreator from '../taskLabelsCreator';

interface TaskSidebarTypes {
  taskId: number
}

const TaskSidebar: React.FC<TaskSidebarTypes> = ({ taskId }): JSX.Element => {
  const [activateMenu, setActivateMenu] = useState(false);
  return (
    <div className={styles.cardSidebar}>
      <div onClick={() => setActivateMenu(!activateMenu)} className={styles.cardSidebar_item}>Labels</div>
      {activateMenu && <TaskLabelsCreator taskId={taskId} activateMenu={setActivateMenu}/>}
    </div>
  );
};

export default TaskSidebar;
