import "./Rating.scss";

const Rating = (props) => {
  let count = Math.round(Number(props.rating));
  let stars = "";

  for (let i = 0; i < count; i++) {
    stars += "★";
  }

  for (let i = 0; i < 10 - count; i++) {
    stars += "☆";
  }

  return (
    <div className="stars">
      <p>{stars}</p>
    </div>
  );
};

export default Rating;
