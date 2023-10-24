import { Link } from "react-router-dom";
import data from "../data/data.json";

const List = () => {
  return (
    <div className="grid">
      {data.map((elt, index) => (
        <div className="card" key={index}>
          <h2>{elt.CarMake}</h2>
          <Link to={`/list-item/${elt.id}`}> Read more </Link>
        </div>
      ))}
    </div>
  );
};

export default List;
