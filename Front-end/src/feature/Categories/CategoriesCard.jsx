import man from "../../Assets/men.jpg";
import women from "../../Assets/women.jpg";
import kid from "../../Assets/kid.jpg";

import Button from "../../ui/Button";
import { Link } from "react-router-dom";

function CategoriesCard() {
  return (
    <div
      id="category"
      className="grid grid-cols-1 gap-4 md:grid-cols-3 md:flex md:justify-center md:items-center items-center justify-items-center container mb-20"
    >
      <div className="md:h-1/4 md:w-1/4 w-2/3 flex flex-col gap-4 items-center">
        <h1 className="md:text-3xl text-xl  font-bold capitalize">Women</h1>
        <img src={women} alt="img one" className="rounded-xl" />
        <Link to={`/categories/Women`}>
          <Button type={"white"}>View All</Button>
        </Link>
      </div>
      <div className="md:mb-40 md:h-1/4 md:w-1/4 w-2/3 flex flex-col gap-4 items-center">
        <h1 className="md:text-3xl text-xl  font-bold capitalize">men</h1>
        <img src={man} alt="img one" className="rounded-xl" />
        <Link to={`/categories/Men`}>
          <Button type={"white"}>View All</Button>
        </Link>
      </div>
      <div className="md:h-1/4 md:w-1/4 w-2/3 flex flex-col gap-4 items-center">
        <h1 className="md:text-3xl text-xl font-bold capitalize">kids</h1>
        <img src={kid} alt="img one" className="rounded-xl" />
        <Link to={`/categories/Kids`}>
          <Button type={"white"}>View All</Button>
        </Link>
      </div>
    </div>
  );
}

export default CategoriesCard;
