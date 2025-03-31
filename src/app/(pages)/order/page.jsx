"use client"
import images from "@/_util/constants/images";
import { X } from "lucide-react";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
export default function Orders() {
    let searchparam = useSearchParams()
    let [pushOver, setPushOver] = useState(false)
    useEffect(()=>{
        searchparam == "" ? setPushOver(false) : 
        setPushOver(true) 
    },[searchparam])
    
  return (
        <>
        {pushOver ?<div
      className="w-2/6 rounded-2xl h-screen bg-white p-2"
    >
        <p className=" font-semibold text-lg3ef">#123456789</p>
        <div className="flex justify-between">
          <p className="text-dim">Order Date</p>
          <p>12/12/2021</p>
        </div>
        <div className="w-full flex gap-2">
      <Image
      className="rounded-md w-14 aspect-square h-auto"
        src="/assets/img/summer.png"
        alt="order"
        width={30}
        height={30}/>
        <p className="text-base text-dim line-clamp-1">Lorem ipsum dolor</p>
    </div>
    <div className="w-full rounded-2xl h-fit bg-white">
              <p className=" text-nowrap font-semibold text-sm max-md:text-sm max-md:font-extrabold text-dark">
                Delivery Information
              </p>
            <ul className="flex flex-col">
              <li className="flex justify-between">
                <p className="font-medium text-dim text-sm">
                  Name:
                </p>{" "}
                <p className="text-dim text-sm">
                  Oyetade Kehinde
                </p>
              </li>
              <li className="flex justify-between">
                <p className="font-medium text-dim text-sm">
                  Mobile:
                </p>{" "}
                <p className="text-dim text-sm">
                  +2349070387981
                </p>
              </li>
              <li className="flex justify-between">
                <p className="font-medium text-dim text-sm">
                  Email:
                </p>{" "}
                <p className="text-dim text-sm">
                  kehindeoyetade67@gmail.com
                </p>
              </li>
              <li className="flex justify-between">
                <p className="font-medium text-dim text-sm">
                  Address:
                </p>{" "}
                <p className="text-dim text-sm">
                  30, Dozie Okolo street, unity estate.
                </p>
              </li>
              <li className="flex justify-between">
                <p className="font-medium text-dim text-sm">
                  City:
                </p>{" "}
                <p className="text-dim text-sm">Lagos</p>
              </li>
              <li className="flex justify-between">
                <p className="font-medium text-dim text-sm">
                  State/Region:
                </p>{" "}
                <p className="text-dim text-sm">Lagos</p>
              </li>
              <li className="flex justify-between">
                <p className="font-medium text-dim text-sm">
                  Country:
                </p>{" "}
                <p className="text-dim text-sm">Nigeria</p>
              </li>
            </ul>
          </div>
    </div>: null}
    
        </>
  );
}
