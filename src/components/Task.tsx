import React, { FunctionComponent } from 'react';

export type TaskProps = {
  task: {
    id: string;
    title: string;
    state: any;
  };
  onArchiveTask: () => void;
  onPinTask: () => void;
};

const Task: FunctionComponent<TaskProps> = ({ task: { id, title, state }, onArchiveTask, onPinTask }) => {
  return (
    <div className="list-item">
      <input type="text" value={title} readOnly={true} />
    </div>
  );
};

export default Task;
