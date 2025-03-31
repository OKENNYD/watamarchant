'use client'
import Image from 'next/image'
import Images from "@/_util/constants/images";

export default function Usercard() {
  return (
    <div className="w-56 h-64 hover:rotate rounded-3xl bg-white p-4 gap-2 flex flex-col justify-center items-center">
      <Image src={Images.avatar} className="w-24 border-primary border-2 h-auto aspect-square rounded-full" alt="avatar img"/>
      <p className="text-sm font-semibold text-slate-600">kehindeoyetade67@gmail.com</p>
    </div>
  )
}
