// import { Link } from "react-router-dom";
import CollectionSection from "../feature/Home/CollectionSection";
import HeroSection from "../feature/Home/HeroSection";
import ReviewSection from "../feature/Home/ReviewSection";
// import img1 from "../Assets/img1.png";
// import img2 from "../Assets/img2.png";
// import img3 from "../Assets/img3.png";
// import img4 from "../Assets/img4.png";
import CategoriesCard from "../feature/Categories/CategoriesCard";
import { useProducts } from "../feature/Products/useProducts";
// import { islogged } from "../services/Auth";

function Home() {
 
  const { Products } = useProducts();
  const testData = Products?.filter((item) => item.bestseller === true);

  let BestSellerData = testData?.slice(0, 4);


  return (
    <div>
      <HeroSection />
      <CollectionSection title={"Best Seller"} data={BestSellerData} />
      <CategoriesCard />
      {/* <CollectionSection title={"top selling"} data={data2} /> */}
      <ReviewSection />
    </div>
  );
}

export default Home;
