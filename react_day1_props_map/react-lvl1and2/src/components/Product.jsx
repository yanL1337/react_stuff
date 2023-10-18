const Product = (props) => {
  return (
    <div>
      <img src={props.product.img} alt="" />
      <h2>{props.product.title}</h2>
      <p>{props.product.price}</p>
      <button>Kaufen</button>
    </div>
  );
};

export default Product;
