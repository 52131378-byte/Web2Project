import { Padding } from "@mui/icons-material";
import ProductCard from "../Components/ProductCard";
export default function Products() {
  const product = [
    {
      id: 1,
      name: "Strawberry CheeseCake",
      price: 5,
      image: "/straw.jpg",
    },
    {
      id: 2,
      name: "Lotus CheeseCake",
      price: 7,
      image: "/lotus.jpg",
    },
    {
      id: 3,
      name: " Oreo CheeseCake ",
      price: 7,
      image: " /oero.jpg ",
    },
    {
      id: 4,
      name: "Choco Crepe ",
      price: 6,
      image: "/choco.jpg",
    },
    {
      id: 5,
      name: "Choco Pistasio Crepe ",
      price: 10,
      image: "/pistacio.jpg",
    },
    {
      id: 6,
      name: "Pistasio Fruit Crepe  ",
      price: 15,
      image: "/pistaciofruit.jpg",
    },
  ];
  return (
    <div style={{ padding: "20px" }}>
      <h2>Our Products</h2>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "20px",
          marginTop: "20px",
        }}
      >
        {product.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
    </div>
  );
}
