import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addTask } from '../../redux/actions';
import styles from './styles/Task.module.scss';

interface TaskCreatorTypes {
  listId: number,
  addTask: (listId: number, title: string) => void
}

const TaskCreator: React.FC<TaskCreatorTypes> = ({ listId, addTask }): JSX.Element => {
  const [activateCreator, setCreator] = useState(false);

  const [title, setTitle] = useState('');

  const handleChange = (e: { target: HTMLTextAreaElement; }): void => {
    setTitle(e.target.value);
  };

  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>): void => {
    e.preventDefault();
    if (title.length > 0) {
      addTask(listId, title);
      setTitle('');
      setCreator(!activateCreator);
    }
  };
  return (
    <>
      <div onClick={() => setCreator(!activateCreator)}
           className={activateCreator ? styles.hide : styles.taskCreatorButton}>
        <span>Add another card...</span>
      </div>
      <div className={activateCreator ? styles.taskCreator : styles.hide}>
        <form>
          <textarea value={title} onChange={handleChange}
                    className={styles.taskName} placeholder="Enter name of the card..."/>
          <div className={styles.taskCreator_add}>
            <button onClick={handleSubmit} className={styles.taskCreator_add_submit}>Add card</button>
            <span onClick={() => setCreator(!activateCreator)} className={styles.taskCreator_add_cancel}>&#10005;</span>
          </div>
        </form>
      </div>
    </>
  );
};

export default connect(null, { addTask })(TaskCreator);
