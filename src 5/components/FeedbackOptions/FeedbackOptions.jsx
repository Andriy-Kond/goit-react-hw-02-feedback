import css from './FeedbackOptions.module.css';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return options.map(option => {
    return (
      <button className={css.buttons} onClick={onLeaveFeedback} name={option}>
        {option}
      </button>
    );
  });
};
