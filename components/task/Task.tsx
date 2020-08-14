import React from 'react';
import { connect } from 'react-redux';
import taskStyles from '../../styles/components/Task.module.scss';
import { deleteTask } from '../../redux/actions';

interface TaskTypes {
  title: string,
  id: number,
  onDragStart: (e: { dataTransfer: { setData: (arg0: string, arg1: string) => void } }, currentId: string) => void,
  deleteTask: (id: number) => void,
}

const Task: React.FC<TaskTypes> = ({
  title, id, onDragStart, deleteTask,
}): JSX.Element => (
    <div draggable={true} onDragStart={(e) => onDragStart(e, id.toString())}
         className={taskStyles.task} id={id.toString()}>
      <div>{title}</div>
      <div onClick={() => deleteTask(id)} className={taskStyles.taskDeleter}>x</div>
    </div>
);

export default connect(null, { deleteTask })(Task);
