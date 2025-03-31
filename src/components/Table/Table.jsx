"use client"
import { ArrowUpAZ, Ellipsis, EllipsisVertical } from "lucide-react";
import Image from "next/image";
import Rating from "../Rate/Rate";
import Link from "next/link";
import { useState } from "react";

export default function Table() {
  let formatter = new Intl.NumberFormat("en-ng", {
    style: "currency",
    currency: "NGN",
  });
  let [drop, setDrop] = useState(false)
  return (
    <table>
        <tr>
          <th className="w-fit"><input type="checkbox" className="w-4 h-4 accent-secondary"/></th>
          <th className="flex items-center gap-1 text-base font-normal text-dim"><p>Product Name</p><ArrowUpAZ size={18} strokeWidth={2}/></th>
          <th className="flex items-center gap-1 text-base font-normal text-dim"><p>Brand</p><ArrowUpAZ size={18} strokeWidth={2}/></th>
          <th className="flex items-center gap-1 text-base font-normal text-dim"><p>Category</p><ArrowUpAZ size={18} strokeWidth={2}/></th>
          <th className="flex items-center gap-1 text-base font-normal text-dim"><p>Promotion</p><ArrowUpAZ size={18} strokeWidth={2}/></th>
          <th className="flex items-center gap-1 text-base font-normal text-dim"><p>Rating</p><ArrowUpAZ size={18} strokeWidth={2}/></th>
          <th className="flex items-center gap-1 text-base font-normal text-dim"><p>Price</p><ArrowUpAZ size={18} strokeWidth={2}/></th>
          <th className="flex items-center gap-1 text-base font-normal text-dim"><p>Quantity</p><ArrowUpAZ size={18} strokeWidth={2}/></th>
          <th className="flex items-center gap-1 text-base font-normal text-dim"><p>Status</p><ArrowUpAZ size={18} strokeWidth={2}/></th>
          <th></th>
        </tr>
        <tr className="text-base font-normal text-dim">
          <td className="w-fit"><input type="checkbox" className="w-4 h-4 accent-secondary" /></td>
          <td className="flex items-center gap-1">
            <Image alt="" width={30} height={30} className="rounded-full"/>
            <p>Iphone 16 pro max</p>
          </td>
          <td>Apple</td>
          <td>Electronics</td>
          <td>Limited Offer</td>
          <td className="flex items-center gap-1"><Rating rate={3.5} size={20}/><span className="text-sm">3.5</span></td>
          <td>{formatter.format(10000)}</td>
          <td>52</td>
          <td>Active</td>
          <td className="flex gap-2 flex-col">
        <EllipsisVertical size={24} strokeWidth={2} onClick={()=>setDrop(true)} className="p-1 bg-gray-100 text-secondary rounded-full"/>
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
        </td>
        </tr>
    </table>
  )
}
