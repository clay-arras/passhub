import { getCategory } from "@/app/lib/category";

export default function CategoryButton({
  categoryName,
  handleClick,
  isSelected,
}) {
  return (
    <button onClick={handleClick} className="w-full p-2">
      <div
        className={
          (isSelected ? "stroke-black " : "stroke-gray-400 ") +
          "items-center justify-center flex"
        }
      >
        {getCategory(categoryName)}
      </div>
      <div
        className={
          (isSelected ? "text-black " : "text-gray-400 ") +
          "text-xs text-center font-light font-sans"
        }
      >
        {categoryName}
      </div>
    </button>
  );
}
