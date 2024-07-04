"use client";

import Link from "next/link";
import { MembershipContext } from "./MembershipContext";
import { useContext, useState, useEffect } from "react";
import HeaderProfileMenu from "./HeaderProfileMenu";

export default function Header() {
  const { selectedMemberships, setSelectedMemberships } =
    useContext(MembershipContext);
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    if (window.location.href.includes("success")) {
      setSelectedMemberships([]);
      setSuccess(true);
    }
  }, []);

  return (
    <header className="z-10 flex-nowrap overflow-clip overflow-hidden sticky top-0 bg-white p-3 w-full flex border-t border-gray-200 justify-center space-x-12 text-black font-sans font-light">
      <div className="grow flex">
        <Link
          className="min-w-14 items-center justify-center flex flex-col"
          href={"/"}
        >
          <button className="group">
            <div className="items-center justify-center flex">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="stroke-[1.5px] group-hover:stroke-[1px] size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
                />
              </svg>
            </div>
            <span className="text-center group-hover:font-extralight">
              Home
            </span>
          </button>
        </Link>
        {success && (
          <div className="ml-3 bg-green-400 text-white text-md rounded-xl font-light p-3">
            Thanks for your order!
          </div>
        )}
      </div>
      <div className="flex">
        <Link
          className="pl-1 min-w-16 items-center justify-center flex flex-col"
          href={"/cart"}
        >
          <button className="group">
            <div className="items-center justify-center flex">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="stroke-[1.5px] group-hover:stroke-[1px] size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
                />
              </svg>
            </div>
            <span className="text-center group-hover:font-extralight">
              {"Cart " + selectedMemberships.length.toString()}
            </span>
          </button>
        </Link>
        <HeaderProfileMenu />
      </div>
    </header>
  );
}
