import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownSection,
  DropdownItem,
} from "@nextui-org/dropdown";
import { signIn, signOut } from "next-auth/react";
import { useSession } from "next-auth/react";
import { Avatar, AvatarGroup, AvatarIcon } from "@nextui-org/avatar";

export default function HeaderProfileMenu() {
  const { data: session } = useSession();

  return (
    <div>
      {session && (
        <Dropdown className="">
          <DropdownTrigger>
            <button className="">
              <div className="pl-3 min-w-16 items-center justify-center flex flex-col">
                <Avatar src={session?.user?.image} isBordered showFallback name={session?.user?.name}/>
                {/* <span>Hello, {session?.user?.name}</span> */}
              </div>
            </button>
          </DropdownTrigger>
          <DropdownMenu aria-label="Static Actions">
            <DropdownItem key="account" href={"/account"} className="text-sm">
              Your Profile
            </DropdownItem>
            <DropdownItem
              key="signout"
              className="text-sm text-gray-500"
              onPress={() => signOut()}
            >
              Sign Out
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
      )}
      {!session && (
        <button className="group" onClick={() => signIn()}>
          <div className="pl-3 min-w-16 items-center justify-center flex flex-col">
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
                d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
              />
            </svg>
            <span className="text-center group-hover:font-extralight">
              Sign In
            </span>
          </div>
        </button>
      )}
    </div>
  );
}
