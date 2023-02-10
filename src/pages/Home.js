import React, { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";

const Home = () => {
  const [products, setProducts] = useState([]);

  const { brand, stock } = {};

  useEffect(() => {
    fetch("http://localhost:5000/products")
      .then((res) => res.json())
      .then((data) => setProducts(data.data));
  }, []);

  const activeClass = "text-white bg-indigo-500 border-white";

  return (
    <div>
      <div className="mb-10 flex justify-end gap-5 max-w-7xl mx-auto">
        <button
          // onClick={() => dispatch(filterStock())}
          className={`border px-3 py-2 rounded-full font-semibold ${
            stock && activeClass
          } `}
        >
          In Stock
        </button>
        <button
          // onClick={() => dispatch(filterBrand("amd"))}
          className={`border px-3 py-2 rounded-full font-semibold ${
            brand?.includes("amd") && activeClass
          }`}
        >
          AMD
        </button>
        <button
          // onClick={() => dispatch(filterBrand("intel"))}
          className={`border px-3 py-2 rounded-full font-semibold ${
            brand?.includes("intel") && activeClass
          }`}
        >
          Intel
        </button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 max-w-7xl gap-14 mx-auto my-10">
        {products?.map((product) => (
          <ProductCard product={product} />
        ))}
      </div>
    </div>
  );
};

export default Home;
