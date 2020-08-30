import React, { FunctionComponent } from 'react';

type TaskProp = {
  task: {
    id: string;
    title: string;
    state: any;
  };
  onArchiveTask: () => void;
  onPinTask: () => void;
};

const Task: FunctionComponent<TaskProp> = ({ task: { id, title, state }, onArchiveTask, onPinTask }) => {
  return (
    <div className="list-item">
      <input type="text" value={title} readOnly={true} />
    </div>
  );
};

export default Task;
