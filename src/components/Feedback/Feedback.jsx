import css from './Feedback.module.css';
import clsx from 'clsx';

export const Feedback = () => {
  return (
    <div>
      <div className="buttons">
        <p> Please leave feedback </p>
        <button>Good</button>
        <button>Neutral</button>
        <button>Bad</button>
      </div>

      <div className="statistics">
        <p> Statistics </p>
        <span>Good: {}</span>
        <span>Neutral: {} </span>
        <span>Bad: {}</span>
      </div>
    </div>
  );
};
