"use client";

import { MembershipContext } from "@/app/components/MembershipContext";
import { useContext, useEffect, useState } from "react";
import { Image } from "@nextui-org/react";
import MembershipCheckoutBoxDisplay from "../components/MembershipCheckoutBoxDisplay";
import { motion } from "framer-motion";

export default function CheckoutPage() {
  const { selectedMemberships, setSelectedMemberships } =
    useContext(MembershipContext);
  const [membershipsInfos, setMembershipsInfos] = useState([]);

  useEffect(() => {
    let toFetch = true;
    fetch("api/membership?ids=" + selectedMemberships.join(","))
      .then((res) => res.json())
      .then((res) => {
        if (toFetch) {
          setMembershipsInfos(res);
        }
      });
    return () => {
      toFetch = false;
    };
  }, [selectedMemberships]);

  const removeFromSelected = (id) => {
    const pos = selectedMemberships.indexOf(id);
    if (pos !== -1) {
      setSelectedMemberships((prev) =>
        prev.filter((value, index) => pos !== index)
      );
    }
  };

  let subtotal = 0;
  const delivery = 0;
  if (selectedMemberships.length) {
    for (let id of selectedMemberships) {
      const price = membershipsInfos.find((p) => p._id === id)?.price || 0;
      subtotal += price;
    }
  }

  return (
    <div>
      <div className="p-3 m-5 rounded-lg bg-white font-sans text-xl font-extralight">
        <div>Shopping Cart</div>
        <div className="border-t my-2"></div>
        <div className="flex flex-row">
          <div className="w-3/4">
            {selectedMemberships.length === 0 ? (
              <div className="text-md">No items in your cart</div>
            ) : null}
            {selectedMemberships.length === 0 ? null : (
              <div className="flex flex-col">
                {membershipsInfos?.map((membershipInfos) => (
                  <MembershipCheckoutBoxDisplay
                    key={membershipInfos._id}
                    membershipInfos={membershipInfos}
                    handleDelete={() => removeFromSelected(membershipInfos._id)}
                  />
                ))}
              </div>
            )}
          </div>
          <div className="w-1/4 rounded-lg bg-gray-100 p-3 ">
            <div>Order Summary</div>
            <div className="mt-2 text-md">Subtotal: ${(subtotal).toFixed(2)}</div>
            <div className="mt-2 text-md">Delivery: ${(delivery).toFixed(2)}</div>
            <div className="mt-2 border-t border-slate-400"></div>
            <div className="mt-2 text-md">Total: ${(subtotal + delivery).toFixed(2)}</div>
            <form
              action={"/api/checkout?ids=" + selectedMemberships.join(",")}
              method="POST"
            >
              <input
                type="hidden"
                name="memberships"
                value={selectedMemberships.join(",")}
              />
              <motion.button
                type="submit"
                className="bg-stone-400 mt-3 rounded-xl p-2 text-white drop-shadow-md hover:bg-stone-500"
                whileTap={{ scale: 0.9 }}
              >
                <div>
                  Check out
                </div>
              </motion.button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
