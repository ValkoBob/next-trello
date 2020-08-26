import { connect } from 'react-redux';
import { renameTask } from '../../../../../redux/actions';
import { ListTypes } from '../../../../shared/interfaces/ListTypes';
import { TaskTypes } from '../../../../shared/interfaces/TaskTypes';
import TaskHeader from './taskHeader';

const mapStateToProps = ({ board: { lists, tasks } }:
                           { board: { lists: ListTypes[], tasks: TaskTypes[]} }) => ({ lists, tasks });

export default connect(mapStateToProps, { renameTask })(TaskHeader);
