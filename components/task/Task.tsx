import React from 'react';
import { connect } from 'react-redux';
import styles from './styles/Task.module.scss';
import { deleteTask, popOverTask } from '../../redux/actions';
import { LabelsTypes } from '../../interfaces/LabelsTypes';
import { TaskTypes } from '../../interfaces/TaskTypes';

interface TaskComponentTypes {
  task: TaskTypes,
  onDragStart: (e: { dataTransfer: { setData: (arg0: string, arg1: string) => void } }, currentId: string) => void,
  deleteTask: (id: number) => void,
  popOverTask: (id: number) => void,
  labels: LabelsTypes[],
}

const Task: React.FC<TaskComponentTypes> = ({
  task, onDragStart, deleteTask, popOverTask, labels,
}): JSX.Element => {
  const { id, title } = task;
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
    </div>
    <div onClick={() => deleteTask(id)} className={styles.taskDeleter}><span>&#10006;</span></div>
  </div>
  );
};

const mapStateToProps = ({ board: { labels } }: { board: { labels: LabelsTypes[] } }) => ({
  labels,
});

export default connect(mapStateToProps, { deleteTask, popOverTask })(Task);
