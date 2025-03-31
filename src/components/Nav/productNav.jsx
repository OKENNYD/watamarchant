"use client";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { usePathname } from "next/navigation"
export default function ProductNav() {
  let productPath = [{
    name: "Products",
    url: "/product"
  },{
    name: "Add product",
    url: "/product/upload"
  }]
  let pathName = usePathname();
  return (
      <nav className={`w-full flex max-md:flex-wrap items-center ${pathName === productPath[1].url ? " justify-center" : "justify-between"}`}>
        <form
          className={`w-1/3 max-md:mb-2 h-auto max-md:w-full flex overflow-hidden p-[1px] ${pathName === productPath[1].url ? " hidden" : null}`}
        >
          <input
            type="text"
            placeholder="product name, product Id"
            name="search"
            id="search"
            className="w-full rounded-full h-10 text-dim px-4 outline-secondary"
          />
        </form>
        <ul className="w-auto rounded-full h-10 flex text-dim p-1 bg-gray-200">
          {productPath.map((_,i)=>(
            <li key={i} className={`cursor-pointer rounded-full w-fit font-medium text-base px-6 items-center flex ${pathName === _.url ? "bg-primary text-white" : null}`}>
            <Link href={_.url}>{_.name}</Link>
          </li>
          ))}
        </ul>
        <div className={`flex gap-2 items-center ${pathName === productPath[1].url ? " hidden" : null}`}>
          <span
            role="button"
            className="w-auto h-auto bg-secondary p-0.5 rounded-full text-white text-xl"
          >
            <ChevronLeft />
          </span>
          <span
            role="button"
            className="w-auto h-auto bg-secondary p-0.5 rounded-full text-white text-xl"
          >
            <ChevronRight />
          </span>
          <span className="text-base font-normal text-dim">
            1 of 2
          </span>
        </div>
      </nav>
  );
}
