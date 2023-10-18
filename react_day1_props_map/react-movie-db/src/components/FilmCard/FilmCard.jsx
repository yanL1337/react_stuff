import Rating from "../Rating/Rating";
import "./FilmCard.scss";

const FilmCard = (props) => {
  let genre = props.film.genre.join(", ");
  return (
    <div className="card">
      <h2>{props.film.title}</h2>
      <p>{props.film.year}</p>
      <p>{props.film.director}</p>
      <p>{props.film.duration}</p>
      <Rating rating={props.film.rate} />
      <p>{genre}</p>
    </div>
  );
};

export default FilmCard;
