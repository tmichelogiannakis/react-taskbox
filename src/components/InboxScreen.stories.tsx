import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { PureInboxScreen, InboxScreenProps } from './InboxScreen';
import { reducer } from '../lib/redux';

const store = createStore(reducer, {
  tasks: [
    { id: '1', title: 'Task 1', state: 'TASK_INBOX' },
    { id: '2', title: 'Task 2', state: 'TASK_INBOX' },
    { id: '3', title: 'Task 3', state: 'TASK_INBOX' },
    { id: '4', title: 'Task 4', state: 'TASK_INBOX' },
    { id: '5', title: 'Task 5', state: 'TASK_INBOX' },
    { id: '6', title: 'Task 6', state: 'TASK_INBOX' }
  ]
});

export default {
  component: PureInboxScreen,
  decorators: [story => <Provider store={store}>{story()}</Provider>],
  title: 'InboxScreen'
} as Meta;

const Template: Story<InboxScreenProps> = args => <PureInboxScreen {...args} />;

export const Default = Template.bind({});

export const Error = Template.bind({});
Error.args = {
  error: 'Something'
};
