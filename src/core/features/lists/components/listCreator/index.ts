import { connect } from 'react-redux';
import { addList } from '../../../../../redux/actions';
import ListCreator from './listCreator';

export default connect(null, { addList })(ListCreator);
