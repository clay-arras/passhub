"use client";

import { createContext } from "react";
import useLocalStorageState from "use-local-storage-state";

export const MembershipContext = createContext({});

export function MembershipContextProvider({ children }) {
  const [selectedMemberships, setSelectedMemberships] = useLocalStorageState(
    "memberships",
    { defaultValue: [] }
  );
  return (
    <MembershipContext.Provider
      value={{ selectedMemberships, setSelectedMemberships }}
    >
      {children}
    </MembershipContext.Provider>
  );
}
