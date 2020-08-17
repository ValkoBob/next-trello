import React, { useState } from 'react';
import { connect } from 'react-redux';
import { TaskTypes } from '../../interfaces/TaskTypes';
import { renameTask } from '../../redux/actions';
import NameEditor from '../multiple_components/NameEditor';
import styles from './styles/Task.module.scss';

interface TaskHeaderTypes {
  task: TaskTypes,
  renameTask: (id: number, newTitle: string) => void,
}

const TaskHeader: React.FC<TaskHeaderTypes> = ({ task }) => {
  const [style, setStyle] = useState(styles.taskTitleInput_1);
  const editTitle = (newTitle: string) => {
    renameTask(task.id, newTitle);
  };

  const editClass = (isDisabled: boolean) => {
    setStyle(isDisabled ? styles.taskTitleInput_1 : styles.taskTitleInput_2);
  };
  return (
    <div className={styles.cardHeader}>
      <NameEditor title={task.title} style={style} editTitle={editTitle} editClass={editClass}/>
    </div>
  );
};

export default connect(null, { renameTask })(TaskHeader);
