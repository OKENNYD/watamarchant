"use client";
import Link from "next/link";
import Image from "next/image";
import Rate from "../Rate/Rate";
import Images from "@/_util/constants/images";
import { Ellipsis } from "lucide-react";
import { useState } from "react";

export default function Product(
  {name,
  price,
  ratings,
  stock,
  sold,
  tag,
  url,
  id,}
) {
  // Customize thousands separators (locale-specific)
  let formatter = new Intl.NumberFormat("en-ng", {
    style: "currency",
    currency: "NGN",
  });
  let [drop, setDrop] = useState(false)
  let rates = (Math.random()*5).toFixed(1);
  return (
    <li onMouseLeave={()=>setDrop(false)} className="hover:bg-secondary bg-white hover:bg-opacity-10 w-full h-20 max-md:h-24 rounded-xl flex items-center px-4 max-md:px-2 py-2 gap-2 text-base text-nowrap shadow-md">
        <input type="checkbox" name="mark" className="size-4 accent-secondary rounded-full" />
       <Image
        src={Images.dimension}
        alt="product img"
        width={100}
        height={100}
        className="w-auto h-full rounded-xl aspect-square"
      /> 
      <div className="w-full flex gap-2 justify-between max-md:flex-wrap">
        <Link href="product/1" className="text-primary underline underline-offset-1">
        <p>
          Oyetade kehinde
        </p>
      </Link>
      <span>Brand</span>
      <span>Shoes</span>
      <span>Limited sale</span>
      <div className="flex items-center">
        <Rate className="ms-2 -my-2" maxScore={5} rate={2.5} size={18} />
        <span className=" text-sm text-slate-600">{2.5}</span>
      </div>
      <p>
        {formatter.format(15000)}
      </p>
      <p>15</p>
      <p className=" text-green-400">Active</p>
      <div className="flex gap-2 flex-col">
        <Ellipsis size={24} strokeWidth={2} onClick={()=>setDrop(true)} className="p-1 bg-gray-100 text-secondary rounded-full"/>
        {drop ? <ul onMouseLeave={()=>setDrop(false)} className="w-28 mt-7 right-2 absolute p-1 rounded-lg bg-white shadow gray-300">
          <li className="rounded-lg flex gap-1 text-dim text-sm ps-2 pe-4 py-1 items-center hover:bg-gray-100">
            <Link href="/product/update">
              Edit
            </Link>
          </li>
          <li className="rounded-lg flex gap-1 text-dim text-sm px-2 py-1 items-center hover:bg-gray-100">
            Disable
          </li>
          <li className="rounded-lg flex gap-1 text-dim text-sm px-2 py-1 items-center hover:bg-gray-100">
           Delete
          </li>
        </ul> : null}
      </div>
      </div>
    </li>
  );
}