import { useParams } from "react-router-dom";
import data from "../data/data.json";

const ListItem = () => {
  const currentID = useParams();
  const elt = data.filter((item) => item.id.toString() === currentID.id);

  return (
    <main>
      <article>
        <h2>{elt[0].CarMake}</h2>
        <h3>{elt[0].carModel}</h3>
        <p>{elt[0].CarYear}</p>
      </article>
    </main>
  );
};

export default ListItem;
