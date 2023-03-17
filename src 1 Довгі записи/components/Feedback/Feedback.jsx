import ReactDOM from 'react-dom/client';
import css from './Feedback.module.css';
import clsx from 'clsx';
import { Component } from 'react';

export class Feedback extends Component {
  // & Старий запис:
  // constructor() {
  //   super()
  //   this.state = {

  //   }
  // }
  // & Новий запис (state це завжди об'єкт):
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
    total: 0,
    average: 0,
  };

  countTotalFeedback = () => {
    this.setState(prevState => {
      return { total: prevState.good + prevState.neutral + prevState.bad };
    });
  };

  countPositiveFeedbackPercentage = () => {
    this.setState(prevState => {
      return {
        average: 100 / prevState.total / prevState.good,
      };
    });
  };

  // * Звичайна функція не спрацює, тому що this буде посилатись на неї
  // handleClick(e) {
  //   console.log(e);
  //   console.log(this);
  // }
  // ~ Тому тут треба створювати стрілку. Її this буде посилатись на this класу тому, що this стрілки створюється у момент її оголошення, а внаслідок того, що у стрілки немає свого this, то вона візьме її у батька, тобто у класу.
  handleClickGood = e => {
    // console.log(this);

    // & такий запис мутує state, чого робити не можна.
    // this.state.value += 1;
    // & Тому коли нам не потрібен попередній стан треба використовувати this.setState().
    // this.setState({ value: 1 }); // приймає новий state (тобто це завжди буде об'єкт)
    // & Якщо нам треба використати значення з попереднього state, то треба у setState викликати функцію:
    this.setState(prevState => {
      // повертає об'єкт, бо state - це завжди об'єкт:
      return { good: prevState.good + 1 };
    });
  };

  handleClickNeutral = e => {
    this.setState(prevState => {
      return { neutral: prevState.neutral + 1 };
    });
  };

  handleClickBad = e => {
    this.setState(prevState => {
      return { bad: prevState.bad + 1 };
    });
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
          <span>Positive feedbacks: {this.state.average}</span>
        </div>
      </div>
    );
  }
}
