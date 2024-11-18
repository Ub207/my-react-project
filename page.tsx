import Image from "next/image";
import Navbar from "./components/Navbar";
import ProductCard from "./components/Products";

export default function Home() {
  return (
    <div>
      <Navbar />
      <ProductCard/>
    </div>
  );
}
