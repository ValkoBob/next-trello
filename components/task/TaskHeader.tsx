import React, { useState } from 'react';
import { connect } from 'react-redux';
import { renameTask } from '../../redux/actions';
import NameEditor from '../multiple_components/NameEditor';
import styles from './styles/Task.module.scss';
import { ListTypes } from '../../interfaces/ListTypes';
import { TaskTypes } from '../../interfaces/TaskTypes';

interface TaskHeaderTypes {
  tasks: TaskTypes[],
  taskId: number,
  renameTask: (id: number, newTitle: string) => void,
  lists: ListTypes[],
}

const TaskHeader: React.FC<TaskHeaderTypes> = ({ taskId, tasks, lists, renameTask }) => {
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
      }}>{currentList !== undefined ? currentList : ''}</span>
      </p>
    </div>
  );
};

const mapStateToProps = ({ board: { lists, tasks } }: { board: { lists: ListTypes[], tasks: TaskTypes[]} }) => ({
  lists, tasks,
});

export default connect(mapStateToProps, { renameTask })(TaskHeader);
