import React, { FunctionComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import TaskList from './TaskList';

type PureInboxScreen = {
  error: string | null;
};

export const PureInboxScreen: FunctionComponent<PureInboxScreen> = ({ error }) => {
  if (error) {
    return (
      <div className="page lists-show">
        <div className="wrapper-message">
          <span className="icon-face-sad" />
          <div className="title-message">Oh no!</div>
          <div className="subtitle-message">Something went wrong</div>
        </div>
      </div>
    );
  }

  return (
    <div className="page lists-show">
      <nav>
        <h1 className="title-page">
          <span className="title-wrapper">Taskbox</span>
        </h1>
      </nav>
      <TaskList />
    </div>
  );
};

PureInboxScreen.defaultProps = {
  error: null
};

export default connect(({ error }: PureInboxScreen) => ({ error }))(PureInboxScreen);
