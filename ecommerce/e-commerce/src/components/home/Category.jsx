import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCategories } from "../../redux/categorySlice";

const Category = ({ setCategory }) => {
  const dispatch = useDispatch();
  const { categories } = useSelector((state) => state.categories);

  console.log(categories, "categories");

  useEffect(() => {
    dispatch(getCategories());
  }, [dispatch]);

  return (
    <div className="w-3/12 bg-gray-100 p-4 max-h-screen">
      <div className="border-b px-2 border-gray-400 pb-1 text-xl font-bold">
        KATEGORİ
      </div>
      {categories?.map((category, i) => (
        <div
          onClick={() => setCategory(category)}
          className="text-lg mt-2 cursor-pointer hover:bg-gray-200 p-1"
          key={i}
        >
          {category}
        </div>
      ))}
    </div>
  );
};

export default Category;
