import PropTypes from 'prop-types';
import './Statistics.css';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => (
  <ul className="item_statistics">
    <li>Good: {good} </li>
    <li>Neutral: {neutral}</li>
    <li>Bad: {bad}</li>
    <li>Total: {total}</li>
    <li>Positive feedback: {positivePercentage}%</li>
  </ul>
);

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.string.isRequired,
};
export default Statistics;
