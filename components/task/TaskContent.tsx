import React from 'react';
import { connect } from 'react-redux';
import styles from './styles/Task.module.scss';
import { deleteLabelTask } from '../../redux/actions';
import { LabelsTypes } from '../../interfaces/LabelsTypes';
import TaskDescription from './TaskDescription';

interface TaskContentTypes {
  currentTaskId: number,
  deleteLabelTask: (id: number) => void;
  labels: LabelsTypes[];
}

const TaskContent: React.FC<TaskContentTypes> = ({
  currentTaskId, labels, deleteLabelTask,
}): JSX.Element => (
  <div className={styles.taskContent}>
    <div className={styles.taskContentLabels}>
      <h3 className={styles.taskContentLabels_header}>Labels</h3>
      <div>
        {labels.map(({
          id, taskId, title, backgroundColor,
        }) => (taskId === currentTaskId ? <span onClick={() => deleteLabelTask(id)}
                  key={id} className={styles.taskContentLabels_item} style={{ backgroundColor }}>
              <span>{title}</span>
          </span>
          : null))}
      </div>
    </div>
    <TaskDescription taskId={currentTaskId}/>
  </div>
);

const mapStateToProps = ({ board: { labels } }: { board: { labels: LabelsTypes[] } }) => ({
  labels,
});

export default connect(mapStateToProps, { deleteLabelTask })(TaskContent);
