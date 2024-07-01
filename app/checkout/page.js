"use client";

import { MembershipContext } from "@/app/components/MembershipContext";
import { useContext, useEffect, useState } from "react";

export default function CheckoutPage() {
  const { selectedMemberships, setSelectedMemberships } =
    useContext(MembershipContext);
  const [membershipsInfos, setMembershipsInfos] = useState([]);

  useEffect(() => {
    fetch("/api/membership?ids=" + selectedMemberships.join(","))
      .then((res) => res.json())
      .then((res) => {
        setMembershipsInfos(res);
      });
  }, [selectedMemberships]);

  return (
    <div>
      {selectedMemberships?.map((membership) => (
        <div key={membership}>{membership}</div>
      ))}
    </div>
  );
}
