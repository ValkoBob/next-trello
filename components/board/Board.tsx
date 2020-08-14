import React from 'react';
import { connect } from 'react-redux';
import boardStyles from '../../styles/components/Board.module.scss';
import List from '../list/List';
import ListCreator from '../list/ListCreator';
import { ListTypes } from '../../interfaces/interfaces';

interface BoardTypes {
  board: ListTypes[]
}

const Board: React.FC<BoardTypes> = ({ board }): JSX.Element => {
  console.log(board);
  const moveTask = (idFrom: number, idTo: number, targetListId: number): void => {
    let updatedBoard = board;
    const neededList = updatedBoard.find((list) => list.tasks.find((task) => task.id === idFrom));
    const movedTask = neededList!.tasks.find((task) => task.id === idFrom);
    // @ts-ignore
    updatedBoard = [...updatedBoard, ...neededList!.tasks.filter((task) => task.id === idFrom)];
    console.log(updatedBoard);
    console.log(movedTask);
  };
  return (
    <div className={boardStyles.container}>
      <h1>Trello copy on Next js</h1>
      <div className={boardStyles.board}>
        {board.map((list) => <List key={list.id} title={list.title} id={list.id} tasks={list.tasks}
        moveTask={moveTask}/>)}
        <ListCreator/>
      </div>
    </div>
  );
};

const mapStateToProps = ({ board }: { board: ListTypes[] }) => ({ board });

export default connect(mapStateToProps)(Board);
