import * as React from "react";
import listStyles from '../../styles/components/List.module.scss';

const ListCreator: React.FC = (): JSX.Element => {
  return (
    <div className={listStyles.listCreator}>
      Add list...
    </div>
  )
}

export default ListCreator;
