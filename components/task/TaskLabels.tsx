import React from 'react';
import styles from './styles/Task.module.scss';
import { stylesArray } from './TaskStylesLabels';

const TaskLabels = () => {
  return (
    <div className={styles.taskLabels}>
      <div className={styles.taskLabelsHeader}>
        <span>Labels</span>
        <div className={styles.taskLabelsClose}>&#10005;</div>
      </div>
      <form>
        <label htmlFor="labelName">Name</label>
        <input id="labelName" type="text"/>
        <label>Choose color</label>
        <div>
          {stylesArray.map((color, index) => <span key={index} className={styles.labelColor} style={color}/>)}

        </div>
      </form>
    </div>
  );
};

export default TaskLabels;
