import React from 'react';
import Section from './components/Section';
import FeedbackOptions from './components/feedback';
import Statistics from './components/Statistics';
import Notification from './components/Notification';
import './App.css';
function App() {
  const [good, setGood] = React.useState(0);
  const [neutral, setNeutral] = React.useState(0);
  const [bad, setBad] = React.useState(0);

  const handleChange = ({ target }) => {
    let option = target.textContent;

    switch (option) {
      case 'Good':
        setGood(state => state + 1);
        break;
      case 'Neutral':
        setNeutral(state => state + 1);
        break;
      case 'Bad':
        setBad(state => state + 1);
        break;
      default:
        return;
    }
  };
  const countTotalFeedback = () => {
    return good + neutral + bad;
  };
  const countPositiveFeedbackPercentage = () => {
    const total = countTotalFeedback();
    return total ? ((good / total) * 100).toFixed(0) : 0;
  };

  return (
    <div className="container">
      <Section title="Please leave feedback">
        <FeedbackOptions onLeaveFeedback={handleChange} />
      </Section>
      <Section title="Statistics">
        {countTotalFeedback() !== 0 ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={countTotalFeedback()}
            positivePercentage={countPositiveFeedbackPercentage()}
          />
        ) : (
          <Notification message="No feedback given" />
        )}
      </Section>
    </div>
  );
}
export default App;
