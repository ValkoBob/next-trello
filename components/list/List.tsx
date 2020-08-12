import * as React from "react";
import listStyles from '../../styles/components/List.module.scss';
import ListHeader from './ListHeader';
import Task from '../task/Task';

const List: React.FC = (): JSX.Element=> {
    return (
        <div className={listStyles.list}>
            <ListHeader title={"Some title"}/>
            <div className={listStyles.taskContainer}>
              <Task title={"Some task title"}/>
            </div>
        </div>
    )
}

export default List;
