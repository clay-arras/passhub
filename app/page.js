"use client";

import { useState, useEffect } from "react";
import categoryNames from "@/lib/category";
import CategoryButton from "@/components/CategoryButton";

export default function Home() {
  const [productsInfos, setProductsInfos] = useState([]);
  useEffect(() => {
    fetch("/api/membership")
      .then((res) => res.json())
      .then((res) => setProductsInfos(res));
  }, []);

  return (
    <div>
      <div className="grid-cols-4 flex">
        {categoryNames.map((categoryName) => {
          return (
            <div>
              <CategoryButton handleClick={() => null} categoryName={categoryName}/>
            </div>
          )
        })}
      </div>
    </div>
  );
}
