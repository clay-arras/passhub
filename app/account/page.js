"use client"

import { redirect } from "next/navigation";
import { useSession } from "next-auth/react";
import { useState, useEffect } from "react";
import { getAllOrdersFromAccount } from "../order/route";

export default function AccountPage() {
  const { data: session } = useSession();
  const [ accountOrderInfos, setAccountOrderInfos ] = useState([]);

  if (session === null) {
    redirect("/api/auth/signin");
  }
  useEffect(async () => {
    fetch(`/api/order?email=${session.user.email}`)
      .then((res) => res.json())
      .then((res) => setAccountOrderInfos(res));
    // const orders = await getAllOrdersFromAccount(session.user.email);
    // setAccountOrderInfos(orders);
  }, []);

  console.log(accountOrderInfos);

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
          <div className="text-2xl">Orders</div>
          <div className="flex flex-col rounded-lg bg-gray-100 p-5 mt-3">

          </div>
        </div>
      </div>
    </div>
  );
}
