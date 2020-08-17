import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import styles from './styles/Board.module.scss';
import List from '../list/List';
import ListCreator from '../list/ListCreator';
import { moveTask, popOverTask } from '../../redux/actions';
import { ListTypes } from '../../interfaces/ListTypes';
import { TaskTypes } from '../../interfaces/TaskTypes';
import TaskPopOver from '../task/TaskPopOver';

interface BoardTypes {
  lists: ListTypes[], tasks: TaskTypes[], update: boolean,
  moveTask: (idFrom: number, idTo: number, targetListId: number) => void,
  isPopOverTask: boolean, data: TaskTypes,
}

const Board: React.FC<BoardTypes> = ({
  lists, tasks, update, moveTask, popOverTask, isPopOverTask, data,
}): JSX.Element => {
  useEffect(() => {
  }, [update]);

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
      {isPopOverTask ? <TaskPopOver task={data} popOverTask={popOverTask}/> : null}
    </>
  );
};

const mapStateToProps = ({
  board: {
    lists, tasks, update, isPopOverTask, data,
  },
}: { board: { lists: ListTypes[], tasks: TaskTypes[], update: boolean,
    isPopOverTask: boolean, data: TaskTypes } }) => ({
  lists, tasks, update, isPopOverTask, data,
});

export default connect(mapStateToProps, { moveTask, popOverTask })(Board);
