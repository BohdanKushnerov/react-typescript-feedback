import styles from './Statistics.module.css';

interface Feedback {
  good: number;
  neutral: number;
  bad: number;
}

type StatisticsProps = {
  feedback: Feedback;
  total: number;
  positivePercentage: number;
};

const Statistics = ({
  feedback: { good, neutral, bad },
  total,
  positivePercentage,
}: StatisticsProps) => {
  return (
    <div>
      <p className={styles.stats}>Good: {good}</p>
      <p className={styles.stats}>Neutral: {neutral}</p>
      <p className={styles.stats}>Bad: {bad}</p>
      <p className={styles.stats}>Total: {total}</p>
      <p className={styles.stats}>Positive feedback: {positivePercentage}%</p>
    </div>
  );
};

export default Statistics;
