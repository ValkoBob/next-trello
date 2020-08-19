import React from 'react';
import { connect } from 'react-redux';
import styles from './styles/TaskContent.module.scss';
import { deleteLabelTask } from '../../src/redux/actions';
import TaskDescription from './TaskDescription';
import { TaskTypes } from '../../src/core/shared/interfaces/TaskTypes';
import TaskActivities from '../../src/core/features/tasks/components/taskActivities/taskActivities';

interface TaskContentTypes {
  tasks: TaskTypes[]
  currentTaskId: number,
  deleteLabelTask: (taskId: number, id: number) => void;
}

const TaskContent: React.FC<TaskContentTypes> = ({ tasks, currentTaskId, deleteLabelTask }): JSX.Element => {
  const { labels } = tasks.find((task) => task.id === currentTaskId)!;
  return (
    <div className={styles.taskContent}>
      <div className={styles.taskContentLabels}>
        <h3 className={styles.taskContentLabels_header}>Labels</h3>
        <div>
          {labels.map(({
            id, taskId, title, backgroundColor,
          }) => (taskId === currentTaskId ? <span onClick={() => deleteLabelTask(currentTaskId, id)}
                                                  key={id} className={styles.taskContentLabels_item}
                                                  style={{ backgroundColor }}>
              <span>{title}</span>
          </span>
            : null))}
        </div>
      </div>
      <TaskDescription taskId={currentTaskId}/>
      <TaskActivities taskId={currentTaskId}/>
    </div>
  );
};

const mapStateToProps = ({ board: { tasks } }: { board: { tasks: TaskTypes[] } }) => ({ tasks });

export default connect(mapStateToProps, { deleteLabelTask })(TaskContent);
