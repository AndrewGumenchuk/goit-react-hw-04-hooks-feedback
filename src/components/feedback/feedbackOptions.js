import './feedback.css';
function FeedBackOptions({ onLeaveFeedback }) {
  return (
    <>
      <button className="item_button" onClick={onLeaveFeedback}>
        Good
      </button>

      <button className="item_button" onClick={onLeaveFeedback}>
        Neutral
      </button>

      <button className="item_button" onClick={onLeaveFeedback}>
        Bad
      </button>
    </>
  );
}
export default FeedBackOptions;
