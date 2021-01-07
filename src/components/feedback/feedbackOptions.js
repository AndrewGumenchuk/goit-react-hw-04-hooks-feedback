import './feedback.css';
const FeedBackOptions = ({ options, onLeaveFeedback }) => (
  <div>
    {options.map(option => (
      <button
        className="item_button"
        key={option}
        type="button"
        onClick={() => onLeaveFeedback(option)}
      >
        {option.slice(0, 1).toUpperCase() + option.slice(1)}
      </button>
    ))}
  </div>
);

export default FeedBackOptions;
