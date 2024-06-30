"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { MembershipContext } from "./MembershipContext";
import { useContext } from "react";
import { useSession } from "next-auth/react";
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownSection,
  DropdownItem,
} from "@nextui-org/dropdown";

export default function MembershipHeader() {
  const router = useRouter();
  const path = router.pathname;
  const { selectedMemberships } = useContext(MembershipContext);
  const { session } = useSession();
  console.log(session);

  return (
    <header className="flex-nowrap overflow-clip overflow-hidden sticky top-0 bg-white p-3 w-full flex border-t border-gray-200 justify-center space-x-12 text-black font-sans font-light">
      <div className="grow flex">
        <Link
          className="min-w-14 items-center justify-center flex flex-col"
          href={"/"}
        >
          <div className="">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="size-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
              />
            </svg>
          </div>
          <span className="text-center">Home</span>
          {/* <img src="/logo.png" /> */}
        </Link>
      </div>
      <div className="flex">
        <Link
          className="pl-1 min-w-16 items-center justify-center flex flex-col"
          href={"/checkout"}
        >
          <div className="">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="size-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
              />
            </svg>
          </div>
          <span>{"Cart " + selectedMemberships.length.toString()}</span>
        </Link>
        <Dropdown className="">
          <DropdownTrigger>
            <button className="">
              <div className="pl-3 min-w-16 items-center justify-center flex flex-col">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="size-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                  />
                </svg>
                <span>Profile</span>
              </div>
            </button>
          </DropdownTrigger>
          <DropdownMenu aria-label="Static Actions">
            <DropdownItem key="account">
              <Link href={"/account"} className="text-sm">
                Your Profile
              </Link>
            </DropdownItem>
            <DropdownItem key="signout" className="text-sm text-gray-500">Sign Out</DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </div>
    </header>
  );
}