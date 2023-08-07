import styles from './FeedbackOptions.module.css';

enum FeedbackKeys {
  Good = 'good',
  Neutral = 'neutral',
  Bad = 'bad',
}

interface FeedbackOptionsProps {
  options: FeedbackKeys[];
  onLeaveFeedback: (option: FeedbackKeys) => void;
}

const FeedbackOptions: React.FC<FeedbackOptionsProps> = ({
  options,
  onLeaveFeedback,
}) => {
  return (
    <div className={styles.wrap}>
      {options.map(option => (
        <button
          className={styles.btn}
          key={option}
          onClick={() => onLeaveFeedback(option)}
        >
          {option}
        </button>
      ))}
    </div>
  );
};

export default FeedbackOptions;
