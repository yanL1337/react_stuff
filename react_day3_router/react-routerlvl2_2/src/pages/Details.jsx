const Details = (props) => {
  return (
    <div className="blogWrapper">
      <img src={props.item.img_url} alt="" />
      <h1>{props.item.title}</h1>
      <p>{props.item.description}</p>
    </div>
  );
};

export default Details;
