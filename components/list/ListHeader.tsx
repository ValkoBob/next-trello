import React from 'react';
import styles from '../../styles/components/List.module.scss';
import { connect } from 'react-redux';
import { deleteList } from '../../redux/actions';

interface ListHeaderTypes {
  title: string,
  id: number,
  deleteList: (id: number) => void
}

const ListHeader: React.FC<ListHeaderTypes> = ({title, id, deleteList }): JSX.Element => {
  return (
    <>
      <div className={styles.listHeader}>
        <div className={styles.listTitle}>{title}</div>
        <div onClick={() => deleteList(id)} className={styles.listDeleter}>x</div>
      </div>
    </>
  );
};

export default connect(null, { deleteList })(ListHeader);
