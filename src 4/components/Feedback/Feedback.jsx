import ReactDOM from 'react-dom/client';
import css from './Feedback.module.css';
import clsx from 'clsx';
import { Component } from 'react';

export class Feedback extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
    total: 0,
    average: 0,
  };

  countTotalFeedback = () =>
    this.setState(prevState => ({
      total: prevState.good + prevState.neutral + prevState.bad,
    }));

  countPositiveFeedbackPercentage = () =>
    this.setState(prevState => ({
      average: Math.round((100 / prevState.total) * prevState.good),
    }));

  handleClickGood = () => {
    this.setState(prevState => {
      return { good: prevState.good + 1 };
    });
    this.countTotalFeedback();
    this.countPositiveFeedbackPercentage();
  };

  handleClickNeutral = () => {
    this.setState(prevState => ({ neutral: prevState.neutral + 1 }));
    this.countTotalFeedback();
    this.countPositiveFeedbackPercentage();
  };

  handleClickBad = () => {
    this.setState(prevState => ({ bad: prevState.bad + 1 }));
    this.countTotalFeedback();
    this.countPositiveFeedbackPercentage();
  };

  render() {
    return (
      <div>
        <p> Please leave feedback </p>
        <button className={css.buttons} onClick={this.handleClickGood}>
          Good
        </button>
        <button className={css.buttons} onClick={this.handleClickNeutral}>
          Neutral
        </button>
        <button className={css.buttons} onClick={this.handleClickBad}>
          Bad
        </button>
        <p> Statistics </p>
        <div className={css.statistics}>
          <span>Good: {this.state.good} </span>
          <span>Neutral: {this.state.neutral} </span>
          <span>Bad: {this.state.bad}</span>
          <span>Total: {this.state.total}</span>
          <span>Positive feedbacks: {this.state.average}%</span>
        </div>
      </div>
    );
  }
}
