import React, { FunctionComponent } from 'react';
import { TaskModel } from '../models/task.model';

export type TaskProps = {
  task: TaskModel;
  onArchiveTask: (id: string) => void;
  onPinTask: (id: string) => void;
};

const Task: FunctionComponent<TaskProps> = ({ task: { id, title, state }, onArchiveTask, onPinTask }) => {
  return (
    <div className={`list-item ${state}`}>
      <label className="checkbox">
        <input type="checkbox" defaultChecked={state === 'TASK_ARCHIVED'} disabled={true} name="checked" />
        <span className="checkbox-custom" onClick={() => onArchiveTask(id)} />
      </label>
      <div className="title">
        <input type="text" value={title} readOnly={true} placeholder="Input title" />
      </div>

      <div className="actions" onClick={event => event.stopPropagation()}>
        {state !== 'TASK_ARCHIVED' && (
          <button onClick={() => onPinTask(id)}>
            <span className={`icon-star`} />
          </button>
        )}
      </div>
    </div>
  );
};

export default Task;
