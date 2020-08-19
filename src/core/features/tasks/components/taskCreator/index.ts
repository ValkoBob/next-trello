import { connect } from 'react-redux';
import { addTask } from '../../../../../redux/actions';
import TaskCreator from './taskCreator';

export default connect(null, { addTask })(TaskCreator);
