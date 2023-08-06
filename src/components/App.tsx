import { useReducer } from 'react';
import { Statistics } from './Statistics/Statistics';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Section } from './Section/Section';
import { Notification } from './Notification/Notification';
import styles from './App.module.css';

// type Feedback = {
//   good: number;
//   neutral: number;
//   bad: number;
// };

// const initialFeedbackState: Feedback = {
//   good: 0,
//   neutral: 0,
//   bad: 0,
// };

// type FeedbackKeys = 'good' | 'neutral' | 'bad';

// const feedbackReducer = (
//   state: Record<FeedbackKeys, number>,
//   action: { type: 'increment'; payload: FeedbackKeys }
// ) => {
//   switch (action.type) {
//     case 'increment':
//       return { ...state, [action.payload]: state[action.payload] + 1 };
//     default:
//       return state;
//   }
// };
// =======================================================================
enum FeedbackKeys {
  Good = 'good',
  Neutral = 'neutral',
  Bad = 'bad',
}

type FeedbackState = Record<FeedbackKeys, number>;

const initialFeedbackState: FeedbackState = {
  [FeedbackKeys.Good]: 0,
  [FeedbackKeys.Neutral]: 0,
  [FeedbackKeys.Bad]: 0,
};

type FeedbackAction = { type: 'increment'; payload: FeedbackKeys };

const feedbackReducer = (state: FeedbackState, action: FeedbackAction) => {
  switch (action.type) {
    case 'increment':
      return { ...state, [action.payload]: state[action.payload] + 1 };
    default:
      return state;
  }
};

function App() {
  const [feedback, dispatch] = useReducer(
    feedbackReducer,
    initialFeedbackState
  );

  const handleIncrement = (option: any) => {
    dispatch({ type: 'increment', payload: option });
  };

  const { good } = feedback;

  const sum: number = Object.values(feedback).reduce(
    (acc: number, item: unknown) => acc + (item as number),
    0
  );

  const countPositiveFeedbackPercentage = () => {
    if (!good) return 0;
    else {
      return Math.round((good * 100) / sum);
    }
  };

  return (
    <div className={styles.container}>
      <Section title={'Please leave feedback'}>
        <FeedbackOptions
          options={Object.keys(feedback)}
          onLeaveFeedback={handleIncrement}
        />
      </Section>

      {sum ? (
        <Section title={'Statistics'}>
          <Statistics
            feedback={feedback}
            total={sum}
            positivePercentage={countPositiveFeedbackPercentage()}
          />
        </Section>
      ) : (
        <Notification message={'There is no feedback'} />
      )}
    </div>
  );
}

export default App;
