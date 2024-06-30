import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownSection,
  DropdownItem,
} from "@nextui-org/dropdown";
import { signOut } from "next-auth/react";
import Link from "next/link";
import { useSession } from "next-auth/react";

export default function HeaderProfileMenu() {
  const { data: session } = useSession();
  return (
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
            <span>Hello, {session?.user?.name}</span>
          </div>
        </button>
      </DropdownTrigger>
      <DropdownMenu aria-label="Static Actions">
        <DropdownItem key="account" className="text-sm" href={"/account"}>
          Your Profile
        </DropdownItem>
        <DropdownItem key="signout" className="text-sm text-gray-500" onPress={() => signOut()}>
          Sign Out
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
}
