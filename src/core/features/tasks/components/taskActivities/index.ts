import { connect } from 'react-redux';
import { TaskTypes } from '../../../../shared/interfaces/TaskTypes';
import { addComment, deleteComment } from '../../../../../redux/actions';
import TaskActivities from './taskActivities';

const mapStateToProps = ({ board: { tasks } }: { board: { tasks: TaskTypes[] } }) => ({ tasks });

export default connect(mapStateToProps, { addComment, deleteComment })(TaskActivities);
