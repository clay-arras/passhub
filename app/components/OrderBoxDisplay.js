"use client"

import MembershipOrderBoxDisplay from "./MembershipOrderBoxDisplay";
import { useState, useEffect } from "react";

export default function OrderBoxDisplay({ orderInfo }) {
    const { _id, timestamp, order_total, items } = orderInfo;
    const [ membershipInfos, setMembershipInfos ] = useState([]);
    
    useEffect(() => {
        fetch(`/api/membership?ids=${items.map(x => x.item_id).join(",")}`)
            .then(res => res.json())
            .then(res => setMembershipInfos(res));
    }, [items]);

    return (
        <div className="mb-4">
            <div className="flex flex-row justify-between">
                <div>{new Date(timestamp).toDateString()}</div>
                <div>Total: ${(order_total/100).toFixed(2)}</div>
            </div>
            {membershipInfos.map(x => <MembershipOrderBoxDisplay membershipInfos={x} key={x._id}/>)}
        </div>
    );
}