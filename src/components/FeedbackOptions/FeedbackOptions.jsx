import css from './FeedbackOptions.module.css';
import PropTypes from 'prop-types';
import { Component } from 'react';

export class FeedbackOptions extends Component {
  state = {
    options: ['good', 'neutral', 'bad'],
  };

  render() {
    return this.state.options.map(option => {
      return (
        <button
          key={option}
          className={css.buttons}
          name={option}
          onClick={() => this.props.onLeaveFeedback(option)}
        >
          {option}
        </button>
      );
    });
  }
}

FeedbackOptions.propTypes = {
  onLeaveFeedback: PropTypes.func.isRequired,
};
