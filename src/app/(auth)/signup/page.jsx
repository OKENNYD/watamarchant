"use client"
import Basic from "./steppers/Basic"
import Business from "./steppers/Business"
import Legal from "./steppers/Legal"
import { Check } from "lucide-react";
import Payment from "./steppers/payment";

export default function Signup() {
  let form = 1;
  const onSubmit = async (data) => {
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000))
      console.log(data);
    } catch (error) {
      setError("root", {
        message: "Email or Password aLready exist"
      })
    }

  }
  let header = [{
    "id": 1,
    "title": "Basic Information"
  }, {
    "id": 2,
    "title": "Business Information"
  }, {
    "id": 3,
    "title": "Legal Information"
  }, {
    "id": 4,
    "title": "Payment Information"
  },]
  return (
    <main className="max-sm:p-6 pb-10 w-full h-full flex flex-col items-center justify-center">
      <div className="w-full py-6 flex justify-center">
        <div className="flex w-auto items-center">
          <Check strokeWidth={1.5} size={20} className={`p-2 text-3xl z-2 text-white ${formIndex >= 1 ? "bg-secondary" : "bg-dim"} rounded-full`} />
          <span className={`w-20 h-1 -mx-px ${formIndex >= 2 ? "bg-secondary" : "bg-slate-400"} rounded-full`}></span>
          <Check strokeWidth={1.5} size={20} className={`p-2 text-3xl z-2 text-white ${formIndex >= 2 ? "bg-secondary" : "bg-dim"} rounded-full`} />
          <span className={`w-20 h-1 -mx-px ${formIndex >= 3 ? "bg-secondary" : "bg-slate-400"} rounded-full`}></span>
          <Check strokeWidth={1.5} size={20} className={`p-2 text-3xl z-2 text-white ${formIndex >= 3 ? "bg-secondary" : "bg-dim"} rounded-full`} />
          <span className={`w-20 h-1 -mx-px ${formIndex >= 4 ? "bg-secondary" : "bg-slate-400"} rounded-full`}></span>
          <Check strokeWidth={1.5} size={20} className={`p-2 text-3xl z-2 text-white ${formIndex >= 4 ? "bg-secondary" : "bg-dim"} rounded-full`} />
        </div>
      </div>
      <div className=" w-[30%] max-sm:w-full bg-white h-auto rounded-3xl py-4 px-6">
        {header.map((name, index) => (
          <p key={index} className=" text-slate-400 text-xl font-semibold text-center" >{name.id == form && name.title}</p>
        ))}

        <form className=" py-3 ">
          <Basic formIndex={form}/>
          <Business formIndex={form}/>
          <Legal formIndex={form}/>
          <Payment formIndex={form}/>
        </form>
        <div className="inline-flex text-slate-500 text-xs font-normal w-full text-center justify-center items-center">
          <p>By continuing, you confirm that you are an adult and you have read and accepted our <a href="#">terms of services</a>, <a href="#">Titoja membership agreement</a> and <a href="#">Privacy Policy</a>.</p>
        </div>
      </div>
    </main >
  );
}
