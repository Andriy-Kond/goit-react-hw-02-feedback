import css from './Section.module.css';

export const Section = title => {
  return <p className={css.title}>{title}</p>;
};
