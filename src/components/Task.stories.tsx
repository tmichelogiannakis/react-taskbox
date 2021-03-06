import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import Task, { TaskProps } from './Task';

const args = {
  task: { id: '1', title: 'Test Task', state: 'TASK_INBOX', updatedAt: new Date(2018, 0, 1, 9, 0) }
};

export default {
  component: Task,
  title: 'Task',
  args
} as Meta;

const Template: Story<TaskProps> = args => <Task {...args} />;

export const Default = Template.bind({});

export const Pinned = Template.bind({});
Pinned.args = {
  task: {
    ...args.task,
    state: 'TASK_PINNED'
  }
};

export const Archived = Template.bind({});
Archived.args = {
  task: {
    ...args.task,
    state: 'TASK_ARCHIVED'
  }
};

export const LongTitle = Template.bind({});
LongTitle.args = {
  task: {
    ...args.task,
    title: `This task's name is absurdly large. 
    In fact, I think if I keep going I might end up with content overflow. 
    What will happen? The star that represents a pinned task could have text overlapping. 
    The text could cut-off abruptly when it reaches the star. I hope not!`
  }
};
