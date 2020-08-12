import * as React from "react";
import taskStyles from '../../styles/components/Task.module.scss';

interface TaskTypes {
    title: string
}

const Task: React.FC<TaskTypes> = (props): JSX.Element  => {
    const {title} = props;
    return (
        <div className={taskStyles.task}>{title}</div>
    )
}

export default Task;
