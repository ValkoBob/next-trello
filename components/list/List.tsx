import React from 'react';
import styles from './styles/List.module.scss';
import ListHeader from './ListHeader';
import Task from '../task/Task';
import TaskCreator from '../task/TaskCreator';
import { TaskTypes } from '../../interfaces/TaskTypes';

interface ListTypes {
  title: string;
  id: number;
  tasks: TaskTypes[];
  moveTask: (idFrom: number, idTo: number, targetListId: number) => void;
}

const List: React.FC<ListTypes> = ({
  title, id, tasks, moveTask,
}): JSX.Element => {
  const onDragOver = (e: { preventDefault: () => void }) => {
    e.preventDefault();
  };

  const onDragStart = (e: { dataTransfer:
      { setData: (arg0: string, arg1: string) => void } }, currentId: string) => {
    e.dataTransfer.setData('id', currentId);
  };

  const onDrop = (e: React.DragEvent<HTMLDivElement>) => {
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
        {tasks.map((task) => {
          if (task.listId === id) {
            return <Task key={task.id} title={task.title} listId={task.listId}
                         onDragStart={onDragStart} id={task.id}/>;
          }
          return null;
        })}
      </div>
      <TaskCreator listId={id}/>
    </div>
  );
};

export default List;
