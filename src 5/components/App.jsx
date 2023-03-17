import ReactDOM from 'react-dom/client';
import css from './Feedback.module.css';
import clsx from 'clsx';
import { Component } from 'react';
import { Section } from './Section/Section';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Statistics } from './Statistics/Statistics';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
    total: 0,
    average: 0,
    options: ['good', 'neutral', 'bad'],
  };

  handleClick = e => {
    console.log(e);
    this.setState(prevState => {
      return { good: prevState.good + 1 };
    });
    this.countTotalFeedback();
    this.countPositiveFeedbackPercentage();
  };

  countTotalFeedback = () =>
    this.setState(prevState => ({
      total: prevState.good + prevState.neutral + prevState.bad,
    }));

  countPositiveFeedbackPercentage = () =>
    this.setState(prevState => ({
      average: Math.round((100 / prevState.total) * prevState.good),
    }));

  // handleClickGood = () => {
  //   this.setState(prevState => {
  //     return { good: prevState.good + 1 };
  //   });
  //   this.countTotalFeedback();
  //   this.countPositiveFeedbackPercentage();
  // };

  // handleClickNeutral = () => {
  //   this.setState(prevState => ({ neutral: prevState.neutral + 1 }));
  //   this.countTotalFeedback();
  //   this.countPositiveFeedbackPercentage();
  // };

  // handleClickBad = () => {
  //   this.setState(prevState => ({ bad: prevState.bad + 1 }));
  //   this.countTotalFeedback();
  //   this.countPositiveFeedbackPercentage();
  // };

  render() {
    return (
      <div>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={this.state.options}
            onLeaveFeedback={this.handleClick}
          ></FeedbackOptions>
        </Section>

        <Section title="Statistics">
          <Statistics
            good={this.state.good}
            neutral={this.state.neutral}
            bad={this.state.bad}
            total={this.state.total}
            positivePercentage={this.state.average}
          ></Statistics>
        </Section>
      </div>
    );
  }
}

// =======================================
// Стан застосунку обов'язково повинен бути наступного вигляду, додавати нові властивості не можна.
// state = {
//   good: 0,
//   neutral: 0,
//   bad: 0
// }

//  =====================================
// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import css from './Feedback.module.css';
// import clsx from 'clsx';
// import { Component } from 'react';
