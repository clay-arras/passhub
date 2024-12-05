"use client";

import { useState, useEffect } from "react";
import categoryNames from "@/app/lib/category";
import CategoryButton from "@/app/components/CategoryButton";
import MembershipBoxDisplay from "@/app/components/MembershipBoxDisplay";
import { Input } from "@nextui-org/react";

export default function Home() {
  const [categorySelect, setCategorySelect] = useState("All");
  const [productsInfos, setProductsInfos] = useState([]);
  const [phrase, setPhrase] = useState("");

  useEffect(() => {
    fetch("/api/membership")
      .then((res) => res.json())
      .then((res) => setProductsInfos(res));
  }, []);

  let displayProductsInfos;
  if (categorySelect === "All") {
    displayProductsInfos = productsInfos;
  } else {
    displayProductsInfos = productsInfos.filter(
      (productInfos) => productInfos.category === categorySelect
    );
  }

  if (phrase) {
    displayProductsInfos = displayProductsInfos.filter((p) =>
      p.name.toLowerCase().includes(phrase.toLowerCase())
    );
  }

  return (
    <div className="p-1">
      <div className="m-2">
        <Input
          value={phrase}
          onChange={(e) => setPhrase(e.target.value)}
          type="text"
          placeholder="Search for products..."
          variant="underlined"
          className="z-0"
        />
      </div>
      <div className="mx-2">
        <div
          className={
            "overflow-hidden overflow-x-scroll flex flex-nowrap snap-x scrollbar-hide"
          }
        >
          {categoryNames.map((categoryName) => {
            return (
              <div
                key={categoryName}
                className="snap-start min-w-32 flex grow items-center justify-center m-1 rounded-xl border"
              >
                <CategoryButton
                  handleClick={() => {
                    setCategorySelect(categoryName);
                  }}
                  categoryName={categoryName}
                  isSelected={categorySelect === categoryName}
                />
              </div>
            );
          })}
        </div>
      </div>
      <div className="flex my-3 border-t pt-3 mx-2"></div>
      <div className="place-items-center grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {(Array.isArray(displayProductsInfos) && displayProductsInfos.length > 0) && displayProductsInfos.map((productInfos) => {
          return <MembershipBoxDisplay {...productInfos} key={productInfos._id}/>;
        })}
      </div>
    </div>
  );
}
