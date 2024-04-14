"use client";
import { DashboardSidebar } from "@/components";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { formatCategoryName } from "../../../../../utils/categoryFormating";
import { convertCategoryNameToURLFriendly } from "../../../../../utils/categoryFormating";

interface DashboardSingleCategoryProps {
  params: { id: number };
}

const DashboardSingleCategory = ({
  params: { id },
}: DashboardSingleCategoryProps) => {
  const [categoryInput, setCategoryInput] = useState<any>({
    name: "",
  });
  const router = useRouter();

  const deleteCategory = async () => {
    const requestOptions = {
      method: "DELETE",
    };
    fetch(`http://localhost:3001/api/categories/${id}`, requestOptions).then(
      (response) => {
        toast.success("Category deleted successfully");
        router.push("/admin/categories");
      }
    );
  };

  const updateCategory = async () => {
    if (categoryInput.name.length > 0) {
      const requestOptions = {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: convertCategoryNameToURLFriendly(categoryInput.name),
        }),
      };
      fetch(`http://localhost:3001/api/categories/${id}`, requestOptions)
        .then((response) => response.json())
        .then((data) => toast.success("Category successfully updated"));
    } else {
      toast.error("For updating a category you must enter all values");
      return;
    }
  };

  useEffect(() => {
    fetch(`http://localhost:3001/api/categories/${id}`)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setCategoryInput({
          name: data?.name,
        });
      });
  }, [id]);

  return (
    <div className="bg-white flex justify-start max-w-screen-2xl mx-auto xl:h-[100vh] max-xl:flex-col max-xl:gap-y-5">
      <DashboardSidebar />
      <div className="flex flex-col gap-y-7 xl:pl-5 max-xl:px-5 w-full">
        <h1 className="text-3xl font-semibold">Category details</h1>
        <div>
          <label className="form-control w-full max-w-xs">
            <div className="label">
              <span className="label-text">Category name:</span>
            </div>
            <input
              type="text"
              className="input input-bordered w-full max-w-xs"
              value={formatCategoryName(categoryInput.name)}
              onChange={(e) =>
                setCategoryInput({ ...categoryInput, name: e.target.value })
              }
            />
          </label>
        </div>

        <div className="flex gap-x-2 max-sm:flex-col">
          <button
            type="button"
            className="uppercase bg-blue-600 px-10 py-5 text-lg border border-black border-gray-300 font-bold text-white shadow-sm hover:bg-blue-700 hover:text-white focus:outline-none focus:ring-2"
            onClick={updateCategory}
          >
            Update user
          </button>
          <button
            type="button"
            className="uppercase bg-red-600 px-10 py-5 text-lg border border-black border-gray-300 font-bold text-white shadow-sm hover:bg-red-700 hover:text-white focus:outline-none focus:ring-2"
            onClick={deleteCategory}
          >
            Delete user
          </button>
        </div>
      </div>
    </div>
  );
};

export default DashboardSingleCategory;
