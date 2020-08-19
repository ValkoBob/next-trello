import React from 'react';
import styles from './styles/list.module.scss';
import ListHeader from '../listHeader/listHeader';
import Task from '../../../tasks/components/task/task';
import TaskCreator from '../../../tasks/components/taskCreator/taskCreator';
import { TaskTypes } from '../../../../shared/interfaces/TaskTypes';

interface ListTypes {
  title: string;
  id: number;
  tasks: TaskTypes[];
  moveTask: (idFrom: number, idTo: number, targetListId: number) => void;
}

const List: React.FC<ListTypes> = ({
  title, id, tasks, moveTask,
}): JSX.Element => {
  const onDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.stopPropagation();
    e.preventDefault();
  };

  const onDragStart = (e: { dataTransfer:
      { setData: (arg0: string, arg1: string) => void } }, currentId: string) => {
    e.dataTransfer.setData('id', currentId);
  };

  const onDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.stopPropagation();
    e.preventDefault();
    const idFrom = e.dataTransfer.getData('id');
    const idTo = (e.target as HTMLDivElement).getAttribute('id');
    if (idFrom === idTo) {
      return;
    }
    moveTask(Number(idFrom), Number(idTo), id);
  };

  return (
    <div onDragOver={onDragOver} onDrop={onDrop} className={styles.list}>
      <ListHeader title={title} id={id}/>
      <div className={styles.taskContainer}>
        {tasks.filter((task) => task.listId === id).map((task) => <Task key={task.id} task={task}
                                                                    onDragStart={onDragStart}/>)}
        {tasks.map((task) => {
          if (task.listId === id) {
            return <Task key={task.id} task={task}
                         onDragStart={onDragStart}/>;
          }
          return null;
        })}
      </div>
      <TaskCreator listId={id}/>
    </div>
  );
};

export default List;
