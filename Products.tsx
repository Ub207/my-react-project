import React from 'react';

const ProductCard = () => {
  return (
    <div className="grid gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 p-5">
      {/* Product 1 */}
      <div className="flex flex-col items-center border p-4 rounded shadow-md">
        <img 
          src="product-01.jpeg"
          alt="product-01"
          width={200}
          height={200}
          className="rounded"
        />
        <p className="mt-2 font-bold">Perfume</p>
      </div>

      {/* Product 2 */}
      <div className="flex flex-col items-center border p-4 rounded shadow-md">
        <img 
          src="product-02.jpeg"
          alt="product-02"
          width={200}
          height={200}
          className="rounded"
        />
        <p className="mt-2 font-bold">Perfume</p>
      </div>

      {/* Product 3 */}
      <div className="flex flex-col items-center border p-4 rounded shadow-md">
        <img 
          src="product-01.jpeg"
          alt="product-03"
          width={200}
          height={200}
          className="rounded"
        />
        <p className="mt-2 font-bold">Perfume</p>
      </div>
    </div>
  );
}

export default ProductCard;
