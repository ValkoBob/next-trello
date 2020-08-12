import * as React from "react";
import listStyles from '../../styles/components/List.module.scss';

interface ListHeaderTypes {
  title: string
}

const ListHeader: React.FC<ListHeaderTypes> = (props): JSX.Element => {
  const {title} = props;
  return (
    <div className={listStyles.listHeader}>
      {title}
    </div>
  )
}

export default ListHeader;
