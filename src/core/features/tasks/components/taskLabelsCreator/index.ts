import { connect } from 'react-redux';
import { addLabelTask } from '../../../../../redux/actions';
import { TaskTypes } from '../../../../shared/interfaces/TaskTypes';
import TaskLabelsCreator from './taskLabelsCreator';

const mapStateToProps = ({ board: { tasks } }: { board: { tasks: TaskTypes[]} }) => ({ tasks });

export default connect(mapStateToProps, { addLabelTask })(TaskLabelsCreator);
