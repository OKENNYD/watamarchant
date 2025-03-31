import { ArrowRight } from "lucide-react";
export default function Payment(formIndex) {
  return (
    <div className={formIndex == 4 ? "w-full flex gap-4 flex-col" : "hidden"}>
      <div className="w-full">
        <input
          type="number"
          placeholder="CARD-NUMBER-XXXX"
          className="  p-2 ps-3 outline-primary w-full h-10 font-medium caret-secondary text-sm placeholder:text-slate-400 bg-slate-200 rounded-2xl text-gray-600 "
        />
      </div>
      <div className="w-full flex gap-4">
        <div className="w-2/6">
          <input
            type="number"
            maxLength={3}
            placeholder="CVN"
            className="  p-2 ps-3 outline-primary w-full h-10 font-medium caret-secondary text-sm placeholder:text-slate-400 bg-slate-200 rounded-2xl text-gray-600 "
          />
        </div>
        <div className="w-4/6">
          <input
            type="number"
            maxLength={4}
            placeholder="Pin"
            className="  p-2 ps-3 outline-primary w-full h-10 font-medium caret-secondary text-sm placeholder:text-slate-400 bg-slate-200 rounded-2xl text-gray-600 "
          />
        </div>
      </div>
      <div className=" w-full flex gap-4 justify-between items-center">
        <div
          onClick={() => formIndex--}
          className="px-3 py-2 cursor-pointer text-base bg-primary dark:bg-secondary w-auto rounded-full text-white flex gap-1 items-center"
        >
          <ArrowRight strokeWidth={1.5} size={25} />
          <p className="font-semibold text-sm">Previous</p>
        </div>
        <button
          type="submit"
          className="px-3 py-2 cursor-pointer text-base bg-primary dark:bg-secondary w-full rounded-full text-white font-bold"
        >
          Submit
        </button>
      </div>
    </div>
  );
}
