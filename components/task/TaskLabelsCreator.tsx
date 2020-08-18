import React, { useState } from 'react';
import { connect } from 'react-redux';
import styles from './styles/Task.module.scss';
import { stylesArray } from './TaskStylesLabels';
import { addLabelTask } from '../../redux/actions';

interface TaskLabelsTypes {
  taskId: number,
  activateMenu: (activateMenu: boolean) => void;
  addLabelTask: (taskId: number, title: string, backgroundColor: string) => void;
}

const TaskLabelsCreator: React.FC<TaskLabelsTypes> = ({ activateMenu, addLabelTask, taskId }): JSX.Element => {
  const [neededColor, setNeededColor] = useState(0);
  const [title, setTitle] = useState('');

  const handleChange = (e: { target: HTMLInputElement; }): void => {
    setTitle(e.target.value);
  };

  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>): void => {
    e.preventDefault();
    if (title.length > 0) {
      const currentColor = stylesArray[neededColor];
      addLabelTask(taskId, title, currentColor.backgroundColor);
      setTitle('');
      activateMenu(false);
    }
  };

  return (
    <div className={styles.taskLabels}>
      <div className={styles.taskLabelsHeader}>
        <span>Labels</span>
        <div onClick={() => activateMenu(false)} className={styles.taskLabelsClose}>&#10005;</div>
      </div>
      <form className={styles.taskLabelsForm}>
        <label htmlFor="labelName">Name</label>
        <input onChange={handleChange} className={styles.labelName} id="labelName" type="text"/>
        <label>Choose color</label>
        <div>
          {stylesArray.map((color, index) => (
            <span onClick={() => setNeededColor(index)} key={index} className={styles.labelColor} style={color}>
              {neededColor === index ? <span className={styles.labelColorChoice}>&#10003;</span> : null}
            </span>
          ))}
        </div>
        <button onClick={handleSubmit} className={styles.taskLabelButtonCreate}>Create</button>
      </form>
    </div>
  );
};

export default connect(null, { addLabelTask })(TaskLabelsCreator);
