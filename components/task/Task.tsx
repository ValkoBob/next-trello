import React from "react";
import taskStyles from '../../styles/components/Task.module.scss';

interface TaskTypes {
    title: string,
    id: number,
    onDragStart: any
}

const Task: React.FC<TaskTypes> = (props): JSX.Element  => {
    const {title, id, onDragStart} = props;
    return (
        <div draggable={true} onDragStart={(e) => onDragStart(e, id)}
             className={taskStyles.task} id={id.toString()}>{title}</div>
    )
}

export default Task;
