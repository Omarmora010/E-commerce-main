/* eslint-disable react/prop-types */

import { formatCurrency } from "../../utils/helper";

function UserOrdersCard({ order, id }) {
  const { items } = order;

  return (
    <div className="py-6 px-4 md:px-6 2xl:px-20 2xl:container 2xl:mx-auto">
      <div className="flex justify-start items-start space-y-2 flex-col">
        <h1 className="text-3xl lg:text-4xl font-semibold leading-7 lg:leading-9 text-gray-800">
          Order #{id.split("").slice(0, 4).join("")}
        </h1>
      </div>
      {items?.map((item) => (
        <div
          key={item.id}
          className="flex flex-col justify-start items-start w-full space-y-4 md:space-y-6 xl:space-y-8"
        >
          <div className="flex flex-col justify-start items-start bg-gray-50 px-4 py-4 md:p-6 xl:p-8 w-full">
            <p className="text-lg md:text-xl font-semibold leading-6 xl:leading-5 text-gray-800">
              Order Details
            </p>
            <div className="mt-4 md:mt-6 flex flex-col md:flex-row justify-start items-start md:items-center md:space-x-6 xl:space-x-8 w-full">
              <div className="pb-4 md:pb-8 w-full md:w-40">
                <img
                  className="w-1/2 md:w-full md:block"
                  src={`${item.image}`}
                  alt="dress"
                />
              </div>
              <div className="border-b border-gray-200 md:flex-row flex-col flex justify-between items-start w-full pb-8 space-y-4 md:space-y-0">
                <div className="w-full flex flex-col justify-start items-start space-y-5">
                  <h3 className="text-xl xl:text-2xl font-semibold leading-6 text-gray-800">
                    {item.name.split(" ").slice(-4).join(" ")}
                  </h3>
                  <div className="flex justify-start items-start flex-col">
                    <p className="text-base leading-none text-gray-800">
                      <span className="text-gray-400">Size: </span>
                      {item.size}
                    </p>
                  </div>
                </div>
                <div className="flex justify-between space-x-8 items-start w-full">
                  <p className="text-lg leading-6">
                    {formatCurrency(item.price)}
                  </p>
                  <p className="text-lg leading-6 text-gray-800">
                    {item.quantity}
                  </p>
                  <p className="text-lg font-semibold leading-6 text-gray-800">
                    {formatCurrency(item.price * item.quantity)}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default UserOrdersCard;