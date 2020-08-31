import React, { FunctionComponent } from 'react';
import Task from './Task';
import { TaskModel } from '../models/task.model';

export type TaskListProps = {
  loading: boolean;
  tasks: TaskModel[];
  onArchiveTask: (id: string) => void;
  onPinTask: (id: string) => void;
};

const TaskList: FunctionComponent<TaskListProps> = ({ loading, tasks, onArchiveTask, onPinTask }) => {
  const events = {
    onPinTask,
    onArchiveTask
  };

  if (loading) {
    return <div className="list-items">loading</div>;
  }

  if (tasks.length === 0) {
    return <div className="list-items">empty</div>;
  }

  return (
    <div className="list-items">
      {tasks.map(task => (
        <Task key={task.id} task={task} {...events} />
      ))}
    </div>
  );
};

export default TaskList;
