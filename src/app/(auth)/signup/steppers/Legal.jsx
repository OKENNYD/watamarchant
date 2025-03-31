import { IoArrowBack, IoArrowForward } from "react-icons/io5";
export default function Legal(formIndex) {
  return (
    <div className={formIndex == 3 ? "w-full flex gap-4 flex-col" : "hidden"}>
      <div className="w-full">
        <select className="  p-2 ps-3 outline-primary w-full h-10 font-medium caret-secondary text-sm placeholder:text-slate-400 bg-slate-200 rounded-2xl text-gray-600 " >
          <option value="">-- document type --</option>
          <option value="cac">cac</option>
        </select>
      </div>
      <div className="w-full">
        <input type="text" placeholder="Registration number" className="  p-2 ps-3 outline-primary w-full h-10 font-medium caret-secondary text-sm placeholder:text-slate-400 bg-slate-200 rounded-2xl text-gray-600 " />
      </div>
      <div className="w-full">
        <input type="file" placeholder="Business Name" className="  p-2 ps-3 outline-primary w-full h-10 font-medium caret-secondary text-sm placeholder:text-slate-400 bg-slate-200 rounded-2xl text-gray-600 " />
      </div>
      <div className="w-full">
        <select className="  p-2 ps-3 outline-primary w-full h-10 font-medium caret-secondary text-sm placeholder:text-slate-400 bg-slate-200 rounded-2xl text-gray-600 " >
          <option value="">-- Business policy --</option>
          <option value="return policy">return policy</option>
          <option value="terms of services">terms of services</option>
        </select>
      </div>
      <div className="w-full">
        <input type="file" placeholder="Business Name" className="  p-2 ps-3 outline-primary w-full h-10 font-medium caret-secondary text-sm placeholder:text-slate-400 bg-slate-200 rounded-2xl text-gray-600 " />
      </div>
      <div className=" w-full flex justify-between items-center">
        <div onClick={() => formIndex--} className="px-3 py-2 cursor-pointer text-base bg-primary dark:bg-secondary w-auto rounded-full text-white flex gap-1 items-center" >
          <IoArrowBack />
          <p className="font-semibold text-sm">
            Previous 
          </p>
        </div>
        <div onClick={() => formIndex++} className="px-3 py-2 cursor-pointer text-base bg-primary dark:bg-secondary w-auto rounded-full text-white flex gap-1 items-center" >
        <p className="font-semibold text-sm">
            Next
          </p>
          <IoArrowForward />
        </div>
      </div>
    </div>
  )
}
