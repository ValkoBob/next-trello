import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import styles from './styles/Board.module.scss';
import List from '../list/List';
import ListCreator from '../list/ListCreator';
import { moveTask, moveList, popOverTask } from '../../redux/actions';
import { ListTypes } from '../../interfaces/ListTypes';
import { TaskTypes } from '../../interfaces/TaskTypes';
import TaskPopOver from '../task/TaskPopOver';

interface BoardTypes {
  lists: ListTypes[], tasks: TaskTypes[], update: boolean,
  moveTask: (idFrom: number, idTo: number, targetListId: number) => void,
  moveList:(idFrom: number, idTo: number) => void,
  popOverTask: (data?: TaskTypes) => void,
  isPopOverTask: boolean, data: TaskTypes,
}

const Board: React.FC<BoardTypes> = ({
  lists, tasks, update, moveTask, moveList, popOverTask, isPopOverTask, data,
}): JSX.Element => {
  useEffect(() => {
  }, [update]);
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
    console.log('here on Board!');
    const idTo = (e.target as HTMLDivElement).getAttribute('id');
    if (idFrom === idTo) {
      return;
    }
    moveList(Number(idFrom), Number(idTo));
  };
  return (
    <>
      <div className={styles.container}>
        <h1>Trello copy on Next js</h1>
        <div className={styles.board} onDragOver={onDragOver} onDrop={onDrop}>
          {lists.map((list) => <List key={list.id} title={list.title} id={list.id} tasks={tasks}
                                     moveTask={moveTask} onDragStartList={onDragStart}/>)}
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

export default connect(mapStateToProps, { moveTask, moveList, popOverTask })(Board);
