"use client";

import { MembershipContextProvider, MembershipContext } from "@/components/MembershipContext";
import { useContext } from "react";

export default function CheckoutPage() {
  const { selectedMemberships } = useContext(MembershipContext);

  return (
    <MembershipContextProvider>
      <div>
        {selectedMemberships?.map((membership) => (
          <div>{membership}</div>
        ))}
      </div>
    </MembershipContextProvider>
  );
}
