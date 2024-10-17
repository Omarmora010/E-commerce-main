import { useProducts } from "../feature/Products/useProducts";
import Spinner from "../ui/Spinner";
import Pagination from "../ui/Pagination";
import { useState } from "react";
import { PAGE_SIZE } from "../utils/constance";

import ProductsCollection from "../feature/Products/ProductsCollections";


function Products() {
  const { Products, isLoading } = useProducts();


  const [currentPage, setCurrentPage] = useState(1);

  const lastIndex = currentPage * PAGE_SIZE;
  const firstIndex = lastIndex - PAGE_SIZE;
  const currentPost = Products?.slice(firstIndex, lastIndex);
  if (isLoading) return <Spinner />;
  return (
    <>
      <div className="flex-col gap-10 container">
        <div className=" md:px-5 px-5">
          <ul className="flex  gap-2">
            <li>{`Home >`}</li>
            <li>{`Shop >`}</li>
            <li>{`All categories `}</li>
          </ul>
        </div>

        <ProductsCollection products={currentPost}></ProductsCollection>

        <div className=" flex-row justify-center items-center">
          <Pagination
            totalPost={Products?.length}
            postPage={PAGE_SIZE}
            setCurrentPage={setCurrentPage}
          />
        </div>
      </div>
    </>
  );
}

export default Products;
