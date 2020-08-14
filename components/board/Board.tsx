import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import boardStyles from '../../styles/components/Board.module.scss';
import List from '../list/List';
import ListCreator from '../list/ListCreator';
import { ListTypes, TaskTypes } from '../../interfaces/interfaces';
import { moveTask } from '../../redux/actions';

interface BoardTypes {
  lists: ListTypes[],
  tasks: TaskTypes[],
  update: boolean,
  moveTask: (idFrom: number, idTo: number, targetListId: number) => void
}

const Board: React.FC<BoardTypes> = ({
  lists, tasks, update, moveTask,
}): JSX.Element => {
  useEffect(() => {
  }, [update]);

  return (
      <div className={boardStyles.container}>
        <h1>Trello copy on Next js</h1>
        <div className={boardStyles.board}>
          {lists.map((list) => <List key={list.id} title={list.title} id={list.id} tasks={tasks}
                                     moveTask={moveTask}/>)}
          <ListCreator/>
        </div>
      </div>
  );
};

const mapStateToProps = ({ board: { lists, tasks, update } }:
                           { board: {lists: ListTypes[],
                               tasks: TaskTypes[], update: boolean }}) => ({ lists, tasks, update });

export default connect(mapStateToProps, { moveTask })(Board);
