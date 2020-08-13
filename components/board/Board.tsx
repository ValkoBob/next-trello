import React from 'react';
import boardStyles from '../../styles/components/Board.module.scss';
import List from '../list/List';
import ListCreator from '../list/ListCreator';
import { connect } from 'react-redux';
import { ListTypes } from '../../interfaces/interfaces';

interface BoardTypes {
  board: ListTypes[]
}

const Board: React.FC<BoardTypes> = ({ board }): JSX.Element => {
  console.log(board);
  return (
    <div className={boardStyles.container}>
      <h1>Trello copy on Next js</h1>
      <div className={boardStyles.board}>
        {board.map(list => <List key={list.id} title={list.title} id={list.id} tasks={list.tasks}/>)}
        <ListCreator/>
      </div>
    </div>
  );
};

const mapStateToProps = ({ board }: { board: ListTypes[] }) => {
  return { board };
};

export default connect(mapStateToProps)(Board);
