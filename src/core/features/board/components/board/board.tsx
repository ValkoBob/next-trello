import React, { useEffect, FC } from 'react';
import { ListTypes } from '../../../../shared/interfaces/ListTypes';
import { TaskTypes } from '../../../../shared/interfaces/TaskTypes';
import styles from './styles/board.module.scss';
import List from '../../../lists/components/list/list';
import ListCreator from '../../../lists/components/listCreator';
import TaskPopOver from '../../../../../../components/popover_task/TaskPopOver';

interface BoardTypes {
  lists: ListTypes[], tasks: TaskTypes[], update: boolean,
  moveTask: (idFrom: number, idTo: number, targetListId: number) => void,
  moveList:(idFrom: number, idTo: number) => void,
  popOverTask: (id: number) => void,
  isPopOverTask: boolean, data: number,
}

const Board: FC<BoardTypes> = ({
  lists, tasks, update, moveTask, popOverTask, isPopOverTask, data,
}): JSX.Element => {
  useEffect(() => {}, [update]);

  return (
    <>
      <div className={styles.container}>
        <h1>Trello copy on Next js</h1>
        <div className={styles.board}>
          {lists.map((list) => <List key={list.id} title={list.title} id={list.id} tasks={tasks}
                                     moveTask={moveTask}/>)}
          <ListCreator/>
        </div>
      </div>
      {isPopOverTask ? <TaskPopOver taskId={data} popOverTask={popOverTask}/> : null}
    </>
  );
};

export default Board;
