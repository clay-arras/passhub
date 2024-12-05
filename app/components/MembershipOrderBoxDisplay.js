export default function MembershipOrderBoxDisplay({ membershipInfos }) {
    const { _id, picture, name, desc, price } = membershipInfos;
    return (
      <div key={_id} className="flex flex-row my-2 max-h-40">
        <div className="w-1/3 h-40 overflow-clip rounded-lg">
          <img className="object-cover" src={picture} />
        </div>
        <div className="w-2/3 flex flex-row border-b ml-5">
          <div className="w-3/4 flex-col flex">
            <div className="font-light text-md">{name}</div>
            <p className="font-light text-sm line-clamp-5">
              {desc}
            </p>
          </div>
          <div className="w-1/4 text-right">${(price).toFixed(2)}</div>
        </div>
      </div>
    );
  }
  