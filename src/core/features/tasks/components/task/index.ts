import { connect } from 'react-redux';
import { deleteTask, popOverTask } from '../../../../../redux/actions';
import Task from './task';

export default connect(null, { deleteTask, popOverTask })(Task);
