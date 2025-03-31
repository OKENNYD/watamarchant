"use client"
import Link from "next/link";
import { IoEye, IoEyeOff } from "react-icons/io5";
import { useState } from "react";

export default function Header() {
  let [inputType, setInputType] = useState(true);
  
  return (
    <main className="max-sm:p-6 py-20 w-full h-full flex items-center justify-center">
      <div className=" w-1/4 bg-white rounded-2xl max-sm:w-full h-auto p-4">
        <p className=" text-slate-800 text-2xl font-bold text-center" >Welcome back</p>
        <form className=" flex flex-col pt-3 ">
          <div className="gap-4 flex flex-col">
            <div className=" w-full">
              <input type="email" name="email"placeholder="email" className="p-2 ps-4 border-primary outline-primary w-full h-10 font-medium caret-secondary text-base placeholder:text-slate-400 bg-slate-200 rounded-2xl text-black " />
            </div>
            <div className=" w-full">
              <div className=" w-full flex items-center relative">
              <input type={inputType ? "password" : "text"} name="password" placeholder="password" className=" p-2 ps-4 pe-8 border-primary outline-primary w-full h-10 font-medium caret-secondary text-base placeholder:text-slate-400 bg-slate-200 rounded-2xl text-black" />
              <span onClick={()=>setInputType(!inputType)} className="absolute right-0 mr-2 text-xl text-slate-400">
                {inputType ? <IoEye /> : <IoEyeOff />}</span>
            </div>
            </div>
          </div>
          <Link className=" text-primary text-sm text-end font-medium mb-2 me-2" href="/forgotten_password">Forgotten password?</Link>
          <button type="submit" className=" my-1 bg-primary dark:bg-secondary w-full h-10 font-bold rounded-2xl text-sm text-white" >Login</button>
        </form>
        <div className="inline-flex text-dim text-xs font-thin w-full text-center justify-center items-center">
            <p>By continuing, you confirm that you are an adult and you have read and accepted our terms Titoja Free Membership Agreement and Privacy Policy.</p>
          </div>
      </div>
    </main >
  );
}
