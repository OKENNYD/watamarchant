import countriesData from "@/_util/api/countriesData";
import { IoArrowBack, IoArrowForward } from "react-icons/io5";
export default function Business(formIndex) {
  return (
    <div className={formIndex == 2 ? "w-full flex gap-4 flex-col" : "hidden"}>
      <div className="w-full">
        <input
          type="text"
          placeholder="Business Name"
          className="  p-2 ps-3 outline-primary w-full h-10 font-medium caret-secondary text-sm placeholder:text-slate-400 bg-slate-200 rounded-2xl text-gray-600 "
        />
      </div>
      <div className="w-full">
        <select className="  p-2 ps-3 outline-primary w-full h-10 font-medium caret-secondary text-sm placeholder:text-slate-400 bg-slate-200 rounded-2xl text-gray-600 ">
          <option value="" className="text-slate-400">
            --Business Location--
          </option>
          {countriesData.map((country, index) => (
            <option key={index} value={country.countryNameEn}>
              {country.countryNameEn}
            </option>
          ))}
        </select>
      </div>
      <div className="w-full">
        <select className="  p-2 ps-3 outline-primary w-full h-10 font-medium caret-secondary text-sm placeholder:text-slate-400 bg-slate-200 rounded-2xl text-gray-600 ">
          <option value="" className="text-slate-400">
            --State/Region Location--
          </option>
          {countriesData.map((country, index) => (
            <option key={index} value={country.countryNameEn}>
              {country.countryNameEn}
            </option>
          ))}
        </select>
      </div>
      <div className="w-full">
        <select className="  p-2 ps-3 outline-primary w-full h-10 font-medium caret-secondary text-sm placeholder:text-slate-400 bg-slate-200 rounded-2xl text-gray-600 ">
          <option value="" className="text-slate-400">
            --City Location--
          </option>
          {countriesData.map((country, index) => (
            <option key={index} value={country.countryNameEn}>
              {country.countryNameEn}
            </option>
          ))}
        </select>
      </div>
      <div className="w-full">
        <textarea
          placeholder="Detailed address"
          className="  p-2 ps-3 outline-primary w-full h-16 font-medium caret-secondary text-sm placeholder:text-slate-400 bg-slate-200 rounded-2xl text-slate-600 pe-2 "
        ></textarea>
      </div>
      <div className=" w-full flex justify-between items-center">
        <div
          onClick={() => formIndex--}
          className="px-3 py-2 cursor-pointer text-base bg-primary dark:bg-secondary w-auto rounded-full text-white flex gap-1 items-center"
        >
          <IoArrowBack />
          <p className="font-semibold text-sm">Previous</p>
        </div>
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
