"use client";

import { useState, useEffect } from "react";
import categoryNames from "@/lib/category";
import CategoryButton from "@/components/CategoryButton";
import MembershipBoxDisplay from "@/components/MembershipBoxDisplay";

export default function Home() {
  const [categorySelect, setCategorySelect] = useState("All");
  const [productsInfos, setProductsInfos] = useState([]);
  useEffect(() => {
    fetch("/api/membership")
      .then((res) => res.json())
      .then((res) => setProductsInfos(res));
  }, []);

  let displayProductsInfos;
  if (categorySelect === "All") {
    displayProductsInfos = productsInfos;
  } else {
    displayProductsInfos = productsInfos.filter((productInfos) => productInfos.category === categorySelect);
  }

  return (
    <div className="p-1">
      <div className="mx-2">
        <div
          className={
            "overflow-hidden overflow-x-scroll flex flex-nowrap snap-x scrollbar-hide"
          }
        >
          {categoryNames.map((categoryName) => {
            return (
              <div className="snap-start min-w-32 flex grow items-center justify-center p-2 m-1 rounded-xl border">
                <CategoryButton
                  handleClick={() => {
                    setCategorySelect(categoryName);
                  }}
                  categoryName={categoryName}
                />
              </div>
            );
          })}
        </div>
      </div>
      <div className="flex my-3 border-t pt-3 mx-2"></div>
      <div className="place-items-center grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"> 
        {displayProductsInfos.map((productInfos) => {
          return (
            <div>
              <MembershipBoxDisplay
                name={productInfos.name}
                category={productInfos.category}
                location={productInfos.location}
                picture={productInfos.picture}
                rating={productInfos.rating}
                price={productInfos.price}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}
