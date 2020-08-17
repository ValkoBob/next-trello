import React, { useState } from 'react';
import { connect } from 'react-redux';
import styles from './styles/List.module.scss';
import { deleteList, renameList } from '../../redux/actions';
import NameEditor from '../multiple_components/NameEditor';

interface ListHeaderTypes {
  title: string,
  id: number,
  deleteList: (id: number) => void,
  renameList: (id: number, newTitle: string) => void
}

// eslint-disable-next-line no-shadow
const ListHeader: React.FC<ListHeaderTypes> = ({
  title, id, deleteList, renameList,
}): JSX.Element => {
  const [style, setStyle] = useState(styles.listTitleInput_1);
  const editTitle = (newTitle: string) => {
    renameList(id, newTitle);
  };

  const editClass = (isDisabled: boolean) => {
    setStyle(isDisabled ? styles.listTitleInput_1 : styles.listTitleInput_2);
  };

  return (
    <div className={styles.listHeader}>
      <div className={styles.listTitle}>
        <NameEditor title={title} style={style} editTitle={editTitle} editClass={editClass}/>
      </div>
      <div onClick={() => deleteList(id)} className={styles.listDeleter}>&#10006;</div>
    </div>
  );
};

export default connect(null, { deleteList, renameList })(ListHeader);
