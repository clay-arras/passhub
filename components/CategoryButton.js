import { getCategory } from "@/lib/category";

export default function CategoryButton({ categoryName, handleClick }) {
  return (
    <div>
      <button onClick={handleClick}>
        <div className="items-center justify-center flex">
          {getCategory(categoryName)}
        </div>
        <div className="text-sm text-center font-medium text-gray-500 font-sans">
          {categoryName}
        </div>
      </button>
    </div>
  );
}
