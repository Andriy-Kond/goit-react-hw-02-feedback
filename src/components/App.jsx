import { Component } from 'react';
import { Section } from './Section/Section';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
// import { Statistics } from './Statistics/Statistics';
// import { Notification } from './Notification/Notification';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,

    total: 0,
    average: 0,

    options: ['good', 'neutral', 'bad'],
  };

  handleClick = currentBtnName => {
    this.setState(prevState => {
      return { [currentBtnName]: prevState[currentBtnName] + 1 };
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

  render() {
    return (
      <div>
        clear
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={this.state.options}
            onLeaveFeedback={this.handleClick}
          ></FeedbackOptions>
        </Section>
        {/* <Notification
          message="There is no feedback"
          isFeedback={this.state.total}
        >
          <Section title="Statistics">
            <Statistics
              good={this.state.good}
              neutral={this.state.neutral}
              bad={this.state.bad}
              total={this.state.total}
              positivePercentage={this.state.average}
            ></Statistics>
          </Section>
        </Notification> */}
      </div>
    );
  }
}
