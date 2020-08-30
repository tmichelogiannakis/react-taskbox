import React from 'react';
import Task, { TaskProps } from './Task';

export default {
  component: Task,
  title: 'Task'
};

export const Default = (args: TaskProps) => {
  return <Task {...args} />;
};
Default.args = {
  task: {
    id: '1',
    title: 'Test Task',
    state: 'TASK_INBOX',
    updatedAt: new Date(2018, 0, 1, 9, 0)
  }
};

export const Pinned = (args: TaskProps) => {
  return <Task {...args} />;
};
Pinned.args = {
  task: {
    ...Default.args.task,
    state: 'TASK_PINNED'
  }
};

export const Archived = (args: TaskProps) => {
  return <Task {...args} />;
};
Archived.args = {
  task: {
    ...Default.args.task,
    state: 'TASK_ARCHIVED'
  }
};
