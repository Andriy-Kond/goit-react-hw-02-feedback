import css from './Statistics.module.css';

export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => {
  return (
    <>
      <div className={css.statistics}>
        <span>Good: {good} </span>
        <span>Neutral: {neutral} </span>
        <span>Bad: {bad}</span>
        <span>Total: {total}</span>
        <span>Positive feedbacks: {positivePercentage}%</span>
      </div>
    </>
  );
};
