import css from './Notification.module.css';
import PropTypes from 'prop-types';

export const Notification = ({ message, isFeedback, children }) => {
  return isFeedback !== 0 ? (
    <>{children}</>
  ) : (
    <>
      <p className={css.noFeedback}>{message}</p>
    </>
  );
};

Notification.propTypes = {
  message: PropTypes.string.isRequired,
  isFeedback: PropTypes.number.isRequired,
};
