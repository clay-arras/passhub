"use client";

import { MembershipContext } from "@/app/components/MembershipContext";
import { useContext, useEffect, useState } from "react";
import { Image } from "@nextui-org/react";

export default function CheckoutPage() {
  const { selectedMemberships, setSelectedMemberships } =
    useContext(MembershipContext);
  const [membershipsInfos, setMembershipsInfos] = useState([]);

  useEffect(() => {
    fetch("api/membership?ids=" + selectedMemberships.join(","))
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        setMembershipsInfos(res);
      });
  }, [selectedMemberships]);

  const removeFromSelected = (id) => {
    const pos = selectedMemberships.indexOf(id);
    if (pos !== -1) {
      setSelectedMemberships((prev) =>
        prev.filter((value, index) => pos !== index)
      );
    }
  };

  return (
    <div>
      <div className="p-3 m-5 rounded-lg bg-white font-sans text-xl font-extralight">
        <div>Shopping Cart</div>
        <div className="border-t my-2"></div>
        {!selectedMemberships.length && (
          <div className="text-md">No items in your cart</div>
        )}
        {selectedMemberships.length === 0 ? null : (
          <div className="flex flex-col">
            {membershipsInfos?.map((membershipInfos) => (
              <div key={membershipInfos} className="flex flex-row my-2 h-40">
                <div className="w-1/3 h-40 overflow-clip rounded-lg">
                  <img className="object-cover" src={membershipInfos.picture} />
                </div>
                <div className="w-2/3 flex flex-row border-b ml-4">
                  <div className="w-3/4 flex-col flex">
                    <div className="font-light text-md">
                      {membershipInfos.name}
                    </div>
                    <p className="font-light text-sm text-ellipsis overflow-hidden grow">
                      {membershipInfos.desc}
                    </p>
                    <button
                      className="text-sm mt-1 mb-2 text-left"
                      onClick={() => removeFromSelected(membershipInfos._id)}
                    >
                      Delete
                    </button>
                  </div>
                  <div className="w-1/4 text-right mr-3">
                    ${membershipInfos.price}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
