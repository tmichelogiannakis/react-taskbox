import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import TaskList, { TaskListProps } from './TaskList';

const args = {
  tasks: [
    { id: '1', title: 'Task 1', state: 'TASK_INBOX' },
    { id: '2', title: 'Task 2', state: 'TASK_INBOX' },
    { id: '3', title: 'Task 3', state: 'TASK_INBOX' },
    { id: '4', title: 'Task 4', state: 'TASK_INBOX' },
    { id: '5', title: 'Task 5', state: 'TASK_INBOX' },
    { id: '6', title: 'Task 6', state: 'TASK_INBOX' }
  ]
};

export default {
  component: TaskList,
  title: 'TaskList',
  args,
  decorators: [
    (Story: Story) => (
      <div style={{ padding: '3rem' }}>
        <Story />
      </div>
    )
  ]
} as Meta;

const Template: Story<TaskListProps> = args => <TaskList {...args} />;

export const Default = Template.bind({});

export const WithPinnedTasks = (args: TaskListProps) => {
  return <TaskList {...args} />;
};
WithPinnedTasks.args = {
  tasks: [...args.tasks.slice(0, 5), { id: '6', title: 'Task 6 (pinned)', state: 'TASK_PINNED' }]
};

export const Loading = (args: TaskListProps) => {
  return <TaskList {...args} />;
};
Loading.args = {
  tasks: [],
  loading: true
};

export const Empty = (args: TaskListProps) => {
  return <TaskList {...args} />;
};
Empty.args = {
  tasks: [],
  loading: false
};
