import * as React from 'react';
import boardStyles from '../../styles/components/Board.module.scss';
import List from '../list/List';
import ListCreator from '../list/ListCreator';

const Board: React.FC = () => {
  return (
    <div className={boardStyles.container}>
      <h1>Trello copy on Next js</h1>
      <div className={boardStyles.board}>
        <List/>
        <ListCreator/>
      </div>
    </div>
  );
};

export default Board;
