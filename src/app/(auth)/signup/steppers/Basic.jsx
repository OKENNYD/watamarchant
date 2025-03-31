'use client'
import countriesData from "@/_util/api/countriesData";
import { IoArrowForward, IoEye, IoEyeOff } from "react-icons/io5";
import { useState } from "react";
export default function Basic({formIndex}) {
  let [inputType, setInputType] = useState(true);
  return (
    <div className={formIndex == 1 ? "w-full flex gap-4 flex-col" : "hidden"}>
      <div className="w-full">
        <select className="  p-2 ps-3 outline-primary w-full h-10 font-medium caret-secondary text-sm placeholder:text-slate-400 bg-slate-200 rounded-2xl text-gray-600 ">
          <option value="" className="text-slate-400">
            --Country--
          </option>
          {countriesData.map((country, index) => (
            <option key={index} value={country.countryNameEn}>
              {country.countryNameEn}
            </option>
          ))}
        </select>
      </div>
      <div className="w-full">
        <input
          type="text"
          placeholder="firstname"
          className="  p-2 ps-3 outline-primary w-full h-10 font-medium caret-secondary text-sm placeholder:text-slate-400 bg-slate-200 rounded-2xl text-gray-600 "
        />
      </div>
      <div className="w-full">
        <input
          type="text"
          placeholder="lastname"
          className="  p-2 ps-3 outline-primary w-full h-10 font-medium caret-secondary text-sm text-slate-400 bg-slate-200 rounded-2xl "
        />
      </div>
      <div className="w-full">
        <input
          type="tel"
          placeholder="Pho ne"
          className="  p-2 ps-3 outline-primary w-full h-10 font-medium caret-secondary text-sm placeholder:text-slate-400 bg-slate-200 rounded-2xl text-gray-500 "
        />
      </div>
      <div className="w-full">
        <input
          type="email"
          placeholder="email"
          className="  p-2 ps-3 outline-primary w-full h-10 font-medium caret-secondary text-sm placeholder:text-slate-400 bg-slate-200 rounded-2xl text-gray-500 "
        />
      </div>
      <div className="w-full">
        <div className=" w-full flex items-center relative">
          <input
            type="number"
            placeholder="enter code"
            className=" p-2 ps-4 pe-8 border-primary outline-primary w-full h-10 font-medium caret-secondary text-base placeholder:text-slate-400 bg-slate-200 rounded-2xl text-black"
          />
          <span className="absolute right-0 mr-2 text-sm font-bold text-secondary">
            get code
          </span>
        </div>
      </div>
      <div className="w-full">
        <div className=" w-full flex items-center relative">
          <input
            type={inputType ? "password" : "text"}
            placeholder="password"
            className=" p-2 ps-4 pe-8 border-primary outline-primary w-full h-10 font-medium caret-secondary text-base placeholder:text-slate-400 bg-slate-200 rounded-2xl text-black"
          />
          <span
            onClick={() => setInputType(!inputType)}
            className="absolute right-0 mr-2 text-xl text-slate-400"
          >
            {inputType ? <IoEye /> : <IoEyeOff />}
          </span>
        </div>
      </div>
      <div className=" w-full flex justify-end items-center">
        <div
          onClick={() => formIndex++}
          className="px-3 py-2 cursor-pointer text-base bg-primary dark:bg-secondary w-auto rounded-full text-white flex gap-1 items-center"
        >
          <p className="font-semibold text-sm">Next</p>
          <IoArrowForward />
        </div>
      </div>
    </div>
  );
}
