import { Link } from "react-router-dom";

const Blog = (props) => {
  console.log(props);
  return (
    <div className="blog">
      {props.items.map((item, index) => (
        <div key={index} className="cardWrapper">
          <img src={item.img_url} alt="" />
          <h2>{item.title}</h2>
          <Link to={`/${item.id}`}> See more</Link>
        </div>
      ))}
    </div>
  );
};

export default Blog;
