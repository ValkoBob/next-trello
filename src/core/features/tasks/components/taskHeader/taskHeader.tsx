import React, { useState } from 'react';
import { NameEditor } from '../../../../shared/sharedComponent/nameEditor';
import styles from './styles/taskHeader.module.scss';
import { ListTypes } from '../../../../shared/interfaces/ListTypes';
import { TaskTypes } from '../../../../shared/interfaces/TaskTypes';

interface TaskHeaderTypes {
  tasks: TaskTypes[],
  taskId: number,
  renameTask: (id: number, newTitle: string) => void,
  lists: ListTypes[],
}

const TaskHeader: React.FC<TaskHeaderTypes> = ({
  taskId, tasks, lists, renameTask,
}) => {
  const [style, setStyle] = useState(styles.taskTitleInput_1);
  const neededTask = tasks.find((task) => task.id === taskId);
  const currentList: string | undefined = lists.find((list) => list.id === neededTask!.listId)!.title;
  const editTitle = (newTitle: string) => {
    renameTask(neededTask!.id, newTitle);
  };

  const editClass = (isDisabled: boolean) => {
    setStyle(isDisabled ? styles.taskTitleInput_1 : styles.taskTitleInput_2);
  };

  return (
    <div className={styles.cardHeader}>
      <NameEditor title={neededTask!.title} style={style} editTitle={editTitle} editClass={editClass}/>
      <p style={{
        fontSize: '14px',
        lineHeight: '20px',
        color: '#5e6c84',
        cursor: 'default',
        margin: '0 0 8px',
        display: 'inline-block',
        marginBottom: '0',
        paddingBottom: '0',
      }}>
        in list: <span style={{
        backgroundColor: 'transparent',
        color: '#5e6c84',
        textDecoration: 'underline',
      }}>{currentList || ''}</span>
      </p>
    </div>
  );
};

export default TaskHeader;
