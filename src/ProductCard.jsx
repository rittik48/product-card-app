function ProductCard({ name, price }) {
  return (
    <div className="product-card">
      <h3>{name}</h3>
      <p className="product-price">₹{price}</p>
      <button type="button">Add to Cart</button>
    </div>
  );
}

export default ProductCard;
