
const ProductSkeleton = () => {
  return (
    <>
      {Array.from({ length: 8 }).map((_, idx) => (
        <div key={idx} className="product-item cursor-pointer">
          <div className="h-[200px] w-full animate-pulse bg-gray-300 rounded-md mb-4 object-cover"></div>
          <div className="h-6 w-32 animate-pulse bg-gray-300 rounded-md mb-2"></div>
          <div className="h-6 w-24 animate-pulse bg-gray-300 rounded-md"></div>
        </div>
      ))}
    </>
  );
};

export default ProductSkeleton;
