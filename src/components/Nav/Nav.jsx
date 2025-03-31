"use client";
import Link from "next/link";
import Categories from "@/_util/api/category";
import departments from "@/_util/api/departments";
import { useState, useEffect } from "react"
import { FaAlignLeft, FaChevronDown } from "react-icons/fa6";

export default function Nav() {
  let [department, setdepartment] = useState() 
  useEffect(() => {
    setdepartment(departments)
  }, [])
  
  return (
    <nav className=" z-20 sticky bg-slate-100 py-2 bg-opacity-90 left-0 top-14 w-full max-sm:px-2 px-8">
      <ul className=" w-full overflow-x-scroll scroll-none flex gap-2">
        <li>
          <Link
            href="/"
            className=" w-full text-nowrap whitespace-nowrap font-bold rounded-full text-white text-xs py-1 px-2 bg-primary dark:bg-secondary inline-flex gap-1 justify-center items-center"
          >
            <FaAlignLeft className=" text-xs" />
            All Categories
          </Link>
        </li>
        {Categories.map((dept, index) => (
          <li className="w-auto cursor-pointer" key={index}>
            <details className=" ">
              <summary className=" w-full text-nowrap whitespace-nowrap font-bold rounded-full text-white text-xs py-1 px-2 bg-primary dark:bg-secondary inline-flex gap-1 justify-center items-center">
                {dept.name}
                <FaChevronDown className=" text-xs" />
              </summary>
              <div className="bg-white w-auto absolute z-40 p-2 rounded-xl">
                <ul className=" bg-slate-200 rounded-lg w-auto text-sm text-nowrap font-medium gap-1 text-slate-600">
                  {dept.subcategories.map((cat,index) => (
                    <li key={index}>
                      <Link href={"/" + dept.name + "/" + cat} className=" transition duration-200 w-auto flex justify-start items-center text-nowrap rounded-lg px-3 py-1 hover:bg-primary hover:text-slate-50 dark:hover:text-slate-600 dark:hover:bg-secondary">
                        {cat}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </details>
          </li>
        ))}
      </ul>
    </nav>
  );
}
