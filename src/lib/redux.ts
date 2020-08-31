// A simple redux store/actions/reducer implementation.
// A true app would be more complex and separated into different files.
import { createStore } from 'redux';
import { TaskModel } from '../models/task.model';

export interface TaskState {
  tasks: TaskModel[];
}

const initialState: TaskState = {
  tasks: [
    { id: '1', title: 'Something', state: 'TASK_INBOX' },
    { id: '2', title: 'Something more', state: 'TASK_INBOX' },
    { id: '3', title: 'Something else', state: 'TASK_INBOX' },
    { id: '4', title: 'Something again', state: 'TASK_INBOX' }
  ]
};

export const ARCHIVE_TASK = 'ARCHIVE_TASK';
export const PIN_TASK = 'PIN_TASK';

interface ArchiveTaskAction {
  type: typeof ARCHIVE_TASK;
  payload: { id: string };
}

interface PinTaskAction {
  type: typeof PIN_TASK;
  payload: { id: string };
}

export type TaskActions = ArchiveTaskAction | PinTaskAction;

export function archiveTask(id: string): TaskActions {
  return {
    type: ARCHIVE_TASK,
    payload: { id }
  };
}

// TypeScript infers that this function is returning DeleteMessageAction
export function pinTask(id: string): TaskActions {
  return {
    type: ARCHIVE_TASK,
    payload: { id }
  };
}

// The reducer describes how the contents of the store change for each action
export const reducer = (state = initialState, action: TaskActions) => {
  const { payload } = action;
  switch (action.type) {
    case ARCHIVE_TASK:
      return {
        ...state,
        tasks: state.tasks.map((task: TaskModel) => (task.id === payload.id ? { ...task, state: 'TASK_ARCHIVED' } : task))
      };
    case PIN_TASK:
      return {
        ...state,
        tasks: state.tasks.map((task: TaskModel) => (task.id === payload.id ? { ...task, state: 'TASK_ARCHIVED' } : task))
      };
    default:
      return state;
  }
};

// We export the constructed redux store
export default createStore(reducer, initialState);
