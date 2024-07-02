export default function MembershipCheckoutBoxDisplay({ _id, picture, name, desc, price }, handleDelete) {
  return (
    <div key={_id} className="flex flex-row my-2 h-40">
      <div className="w-1/3 h-40 overflow-clip rounded-lg">
        <img className="object-cover" src={picture} />
      </div>
      <div className="w-2/3 flex flex-row border-b mx-2">
        <div className="w-3/4 flex-col flex">
          <div className="font-light text-md">{name}</div>
          <p className="font-light text-sm text-ellipsis overflow-hidden grow">
            {desc}
          </p>
          <button
            className="text-sm mt-1 mb-2 text-left"
            onClick={() => handleDelete()}
          >
            Delete
          </button>
        </div>
        <div className="w-1/4 text-right mr-3">${price}</div>
      </div>
    </div>
  );
}
