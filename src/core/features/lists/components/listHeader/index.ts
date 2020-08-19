import { connect } from 'react-redux';
import { deleteList, renameList } from '../../../../../redux/actions';
import ListHeader from './listHeader';

export default connect(null, { deleteList, renameList })(ListHeader);
