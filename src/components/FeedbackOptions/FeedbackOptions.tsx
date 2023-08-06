import styles from './FeedbackOptions.module.css';

type FeedbackOptionsProps = {
  options: string[];
  onLeaveFeedback: (option: string) => void;
};

export const FeedbackOptions = ({
  options,
  onLeaveFeedback,
}: FeedbackOptionsProps) => {
  return (
    <div className={styles.wrap}>
      {options.map(option => {
        return (
          <button
            className={styles.btn}
            key={option}
            onClick={() => onLeaveFeedback(option)}
          >
            {option}
          </button>
        );
      })}
    </div>
  );
};
