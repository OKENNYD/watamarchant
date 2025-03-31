"use client";
import Image from "next/image";
import images from "@/_util/constants/images";
import { Ellipsis, Check } from "lucide-react";
import { useState } from "react";
import Link from "next/link";

export default function Order(
  { name,
    price,
    ratings,
    stock,
    sold,
    tag,
    url,
    id }
) {
  // Customize thousands separators (locale-specific)
  let formatter = new Intl.NumberFormat("en-ng", {
    style: "currency",
    currency: "NGN",
  });
  let [drop, setDrop] = useState(false)
  let rates = (Math.random() * 5).toFixed(1);
  return (
    <Link href="/order?name=okennyd" className="hover:bg-secondary bg-white hover:bg-opacity-10 w-full h-20 rounded-xl px-4 py-2 text-lg flex justify-between items-center duration-1000 ease-in-out shadow-md">
      <div className="text-center flex gap-4 items-center"><input className="w-4 h-4" type="checkbox" />
        <p className="block text-base text-dark font-medium">#123456789</p>
      </div>
      <p className="text-base">Lorem, ipsum dolor.</p>
        <p className="text-center text-base line-clamp-1">Oyetade Kehinde</p>
      <div className="text-center text-base flex gap-1 items-center text-green-500">
        <Check size={15} strokeWidth={3} />
        <p>Paid</p>
      </div>
      <div className="text-center font-medium text-base">{formatter.format(12000)}</div>
      <p className="text-center text-green-500 text-base">shipped</p>
      <div className="flex gap-2 flex-col">
        <Ellipsis size={24} strokeWidth={2} onClick={() => setDrop(!drop)} className="p-1 bg-gray-100 text-secondary rounded-full" />
        {drop ? <ul onMouseLeave={() => setDrop(!drop)} className="w-28 mt-7 right-2 absolute p-1 rounded-lg bg-white shadow shadow-gray-300">
          <li className="rounded-lg flex gap-1 text-dim text-sm ps-2 pe-4 py-1 items-center hover:bg-gray-100">
            Suspend
          </li>
          <li className="rounded-lg flex gap-1 text-dim text-sm px-2 py-1 items-center hover:bg-gray-100">
            Cancel
          </li>
        </ul> : null}
      </div>
    </Link>
  );
}