"use client";
import Link from "next/link";
import Image from "next/image";
import Rate from "../Rate/Rate";
import Images from "@/_util/constants/images";

export default function Customer(
  {email,
  productName,
  price,
  quantity,
  time,
  id,}
) {
  // Customize thousands separators (locale-specific)
  let formatter = new Intl.NumberFormat("en-ng", {
    style: "currency",
    currency: "NGN",
  });
  let rates = (Math.random()*5).toFixed(1);
  return (
    <div className="hover:bg-secondary bg-white hover:bg-opacity-20 w-full h-20 rounded-xl flex items-center  px-4 py-2 gap-2">
      <input type="checkbox" name="mark" className="size-4 accent-secondary rounded-full" />
      <div className=" ">
        <div className="">
          <span className="text-lg text dark font-medium">#123456789</span>
          <p className="text-base text dark">Aug 11, 10:23</p>
        </div>
      </div>
      <Image
        src={Images.dimension}
        alt="product img"
        className="w-auto h-full rounded-xl aspect-square"
      />
      <div className="flex justify-between items-center w-full max-md:flex-wrap">
      <Link href="items/1">
        <p className="text-base text-nowrap line-clamp-1 ">
          oyetade kehinde
        </p>
      </Link>
      <span>Iphone 16 pro max </span>
      <span className=" max-md:hidden">Brand</span>
      <span className=" max-md:hidden">Limited sale</span>
      <div className="flex items-center">
        <Rate className="ms-2 -my-2" maxScore={5} rate={rates} size={18} />
        <span className=" text-sm text-slate-600">{rates}</span>
      </div>
      <p className="text-lg">
        {formatter.format((Math.random()*99999).toFixed(2))}
      </p>
      <span>{Math.floor(Math.random()*100)}</span>
      <span>Delivered</span>
      </div>
    </div>
  );
}