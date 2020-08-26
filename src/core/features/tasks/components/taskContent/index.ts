import { connect } from 'react-redux';
import { deleteLabelTask } from '../../../../../redux/actions';
import { TaskTypes } from '../../../../shared/interfaces/TaskTypes';
import TaskContent from './taskContent';

const mapStateToProps = ({ board: { tasks } }: { board: { tasks: TaskTypes[] } }) => ({ tasks });

export default connect(mapStateToProps, { deleteLabelTask })(TaskContent);
