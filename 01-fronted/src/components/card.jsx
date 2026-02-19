import products from "../data/data";

const Card = () => {
  return (
    <div className="cards">
      {products.map((product) => (
        <div key={product.id} className="card-container">
          <img src={product.image} alt={product.name} />
          <h3>{product.name}</h3>
          <p>Price: ₹{product.price}</p>
        </div>
      ))}
    </div>
  );
};

export default Card;