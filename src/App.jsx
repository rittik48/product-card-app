import ProductCard from "./ProductCard";
import "./App.css";

function App() {
  return (
    <main className="shop">
      <h1>Products</h1>
      <div className="product-grid">
        <ProductCard name="Gaming Mouse" price={599} />
        <ProductCard name="Keyboard" price={499} />
        <ProductCard name="Joystick" price={399} />
        <ProductCard name="Speaker" price={2999} />
      </div>
    </main>
  );
} 

export default App;
