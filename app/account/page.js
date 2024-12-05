"use client"

import { redirect } from "next/navigation";
import { useSession } from "next-auth/react";
import { useState, useEffect } from "react";
import { getAllOrdersFromAccount } from "../api/order/route";
import OrderBoxDisplay from "../components/OrderBoxDisplay";
export default function AccountPage() {
  const { data: session } = useSession();
  const [ accountOrderInfos, setAccountOrderInfos ] = useState([]);

  if (session === null) {
    redirect("/api/auth/signin");
  }
  useEffect(() => {
    fetch(`/api/order?email=${session.user.email}`)
      .then((res) => res.json())
      .then((res) => setAccountOrderInfos(res));
    console.log("accountOrderInfos", accountOrderInfos);
  }, []);

  return (
    <div>
      <div className="p-7 m-5 rounded-lg bg-white font-sans text-xl font-extralight">
        <div className="text-3xl">Welcome, {session.user.name}</div>
        <div className="flex space-x-5 rounded-lg pb-1 border-b">
          <button
            type="submit"
            className="mt-3 rounded-xl text-blue-600 hover:text-blue-800"
          >
            Payment Methods
          </button>
          <button
            type="submit"
            className="mt-3 rounded-xl text-blue-600 hover:text-blue-800"
          >
            Dashboard
          </button>
          <button
            type="submit"
            className="mt-3 rounded-xl text-blue-600 hover:text-blue-800"
          >
            Contact Us
          </button>
        </div>
        <div className="pt-9">
          <div className="text-2xl font-normal">Past Orders</div>
          {accountOrderInfos.length === 0 ? <div className="py-3">No orders yet...</div> : 
            <div className="flex flex-col rounded-lg bg-gray-50 p-5 mt-3">
              {accountOrderInfos.map(x => <OrderBoxDisplay orderInfo={x} key={x._id}/>)}
            </div>
          }
        </div>
      </div>
    </div>
  );
}
