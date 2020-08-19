import React, { useState } from 'react';
import { connect } from 'react-redux';
import styles from './styles/TaskDescription.module.scss';
import { TaskTypes } from '../../src/core/shared/interfaces/TaskTypes';
import { editDescription } from '../../src/redux/actions';

interface TaskDescriptionTypes {
  taskId: number,
  tasks: TaskTypes[],
  editDescription: (id: number, description: string) => void,
}

const TaskDescription: React.FC<TaskDescriptionTypes> = ({
                                                           tasks,
                                                           taskId, editDescription,
                                                         }): JSX.Element => {
  const [activateCreator, setActivate] = useState(true);
  const neededTask = tasks.find((task) => task.id === taskId);

  const { id, description } = neededTask!;

  const [title, setTitle] = useState(description);

  const handleChange = (e: { target: HTMLTextAreaElement; }): void => {
    setTitle(e.target.value);
  };

  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>): void => {
    e.preventDefault();
    editDescription(id, title);
    setActivate(!activateCreator);
  };

  return (
    <div className={styles.taskDescription}>
      <div className={styles.taskDescriptionHeader}>
        <h3 className={styles.taskDescriptionHeaderTitle}>Description</h3>
        {description !== '' && activateCreator ? <button onClick={() => setActivate(!activateCreator)}
                                                         className={styles.taskDescriptionHeaderEdit}>Edit</button> : null}
      </div>
      {description === '' || !activateCreator
        ? <div>
          {activateCreator
            ? <div onClick={() => setActivate(!activateCreator)} className={styles.taskDescriptionAdd}>
              <span>Add detailed description…</span>
            </div>
            : <div className={styles.taskDescriptionEditor}>
              <form>
                <textarea onChange={handleChange} value={title}
                          className={styles.taskDescriptionInput} placeholder={'Add detailed description…'}/>
                <div className={styles.taskDescriptionButtons}>
                  <button onClick={handleSubmit} className={styles.taskDescriptionButtons_create}>Save</button>
                  <div onClick={() => setActivate(!activateCreator)}
                       className={styles.taskDescriptionButtons_close}>&#10005;</div>
                </div>
              </form>
            </div>}
        </div> : <div style={{ cursor: 'pointer' }}
                      onClick={() => setActivate(!activateCreator)}>{description}</div>}
    </div>
  );
};

const mapStateToProps = ({ board: { tasks } }: { board: { tasks: TaskTypes[] } }) => ({ tasks });

export default connect(mapStateToProps, { editDescription })(TaskDescription);
