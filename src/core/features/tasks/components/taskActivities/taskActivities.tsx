import React, { ChangeEvent, useState } from 'react';
import styles from './styles/taskActivities.module.scss';
import { TaskTypes } from '../../../../shared/interfaces/TaskTypes';

interface TaskActivitiesTypes {
  taskId: number,
  tasks: TaskTypes[],
  addComment: (taskId: number, comment: string) => void,
  deleteComment: (taskId: number, commentId: number) => void
}

const TaskActivities: React.FC<TaskActivitiesTypes> = ({
  taskId, tasks, addComment, deleteComment,
}): JSX.Element => {
  const [activated, setCreator] = useState(true);
  const [isDisabled, setDisabled] = useState(true);
  const [text, setText] = useState('');
  const [styleButton, setStyleButton] = useState({});
  const neededTask = tasks.find((task) => task.id === taskId);
  const { comments } = neededTask!;

  const handleChange = (e: ChangeEvent<HTMLTextAreaElement>): void => {
    setText(e.target.value);
    setDisabled(!text.length);
    if (text.length > 0) {
      setDisabled(false);
      setStyleButton({ cursor: 'pointer', backgroundColor: '#5aac44', color: '#fff' });
    } else {
      setDisabled(true);
      setStyleButton({});
    }
  };

  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>): void => {
    e.preventDefault();
    setText('');
    setCreator(!activated);
    addComment(taskId, text);
  };

  const handleBlur = (e: React.FocusEvent<HTMLTextAreaElement>): void => {
    e.preventDefault();
  };

  return (
    <div className={styles.taskActivities}>
      <h3>Activities</h3>
      <div className={styles.newComment}>
        {activated ? <div onClick={() => setCreator(!activated)}
             className={styles.newCommentFrame}><span>Write comment...</span></div>
          : <div className={styles.newCommentCreator}>
          <form>
            <textarea onBlur={handleBlur} onChange={handleChange} placeholder="Write comment..." />
            <button style={styleButton} onClick={handleSubmit} disabled={isDisabled}>Save</button>
          </form>
        </div>
        }
      </div>
      {comments.map(({ id, comment }) => (
        <div onClick={() => deleteComment(taskId, id)} key={id} className={styles.comment}>
          <span>{comment}</span>
        </div>
      ))}
    </div>
  );
};

export default TaskActivities;
