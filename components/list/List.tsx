import React from 'react';
import styles from '../../styles/components/List.module.scss';
import ListHeader from './ListHeader';
import Task from '../task/Task';
import TaskCreator from '../task/TaskCreator';
import { TaskTypes } from '../../interfaces/interfaces';

interface ListTypes {
  title: string,
  id: number,
  tasks: TaskTypes[]
}

const List: React.FC<ListTypes> = ({ title, id, tasks }): JSX.Element => {

  const onDragOver = (e: { preventDefault: () => void; }) => {
    e.preventDefault()
  }

  const onDragStart = (e: { dataTransfer: { setData: (arg0: string, arg1: string) => void; }; },
                       id: string) => {
    e.dataTransfer.setData("id", id)
  }

  const onDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault()
    const idFrom = e.dataTransfer.getData('id');
    const idTo = (e.target as HTMLDivElement).getAttribute("id")
    if (idFrom === idTo) {
      return
    }
    console.log(idFrom + "-" + idTo)
    /*updatedCards.splice(idTo, 0,);*/

  }

  return (
    <div onDragOver={onDragOver} onDrop={onDrop} className={styles.list}>
      <ListHeader title={title} id={id}/>
      <div className={styles.taskContainer}>
        {tasks.map(task => {
          if(task.listId === id) {
            return (
              <Task key={task.id} title={task.title} onDragStart={onDragStart} id={task.id}/>
            )
          }
        })}
      </div>
      <TaskCreator listId={id}/>
    </div>
  );
};

export default List;
