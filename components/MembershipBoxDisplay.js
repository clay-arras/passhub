export default function MembershipBoxDisplay({
  name,
  rating,
  location,
  picture,
  price,
}) {
  return (
    <div className="bg-white overflow-hidden border rounded-lg m-2 grow">
      <div className="">
        <img className="object-cover aspect-video" src={picture} />
      </div>
      <div className="mt-2 m-3">
        <div className="flex">
          <div className="font-bold text-md grow text-ellipsis overflow-hidden text-nowrap mr-3">
            {name}
          </div>
          <div className="flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="black"
              viewBox="0 0 24 24"
              stroke-width="1"
              stroke="currentColor"
              class="size-4"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"
              />
            </svg>
            <span className="text-sm ml-1 font-sans font-extralight">
              {rating}
            </span>
          </div>
        </div>
        <div className="text-xs text-gray-700 font-sans flex">
          <span className="text-ellipsis overflow-hidden text-nowrap">
            {location}
          </span>
          {/* <div className="ml-3 text-right grow text-ellipsis overflow-hidden text-nowrap">6,053 miles</div> */}
        </div>
        <div className="text-xs font-sans mt-1">
          <span className="font-medium">${price}</span>
          <span className="text-gray-500"> / week</span>
        </div>
      </div>
    </div>
  );
}
