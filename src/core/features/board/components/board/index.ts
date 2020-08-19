import { connect } from 'react-redux';
import { ListTypes } from '../../../../shared/interfaces/ListTypes';
import { TaskTypes } from '../../../../shared/interfaces/TaskTypes';
import { moveList, moveTask, popOverTask } from '../../../../../redux/actions';
import Board from './board';

const mapStateToProps = ({
  board: {
    lists, tasks, update, isPopOverTask, data,
  },
}: { board: { lists: ListTypes[], tasks: TaskTypes[], update: boolean,
    isPopOverTask: boolean, data: number } }) => ({
  lists, tasks, update, isPopOverTask, data,
});

export default connect(mapStateToProps, { moveTask, moveList, popOverTask })(Board);
