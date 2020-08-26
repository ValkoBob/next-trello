import { connect } from 'react-redux';
import { editDescription } from '../../../../../redux/actions';
import { TaskTypes } from '../../../../shared/interfaces/TaskTypes';
import TaskDescription from './taskDescription';

const mapStateToProps = ({ board: { tasks } }: { board: { tasks: TaskTypes[] } }) => ({ tasks });

export default connect(mapStateToProps, { editDescription })(TaskDescription);
