"use client"
import Link from "next/link";
import Image from "next/image";
import Images from "../../../_util/constants/images"
import { useRef } from "react";
export default function ChangePassword() {
  let val = useRef("")
  const login = async (e) => {
    window.open("localhost:3000/login", "parent")
  }

    let confirmPassword = () => {
      let password = document.getElementById('password').value
      console.log(password);
    }

    const getPassword = async (formData) => {
      const data = {
        password: formData.get("password")
      }
      console.log(data);
  }

    return (
      <main className="max-sm:p-6 py-20 w-full h-full flex items-center justify-center">
        <div className=" w-72 max-sm:w-full h-auto pt-6 pb-4">
        <Link href="/">
        <Image src={Images.icon} height={60} width={80} alt="salepex" className=" m-auto mb-2" ></Image>
        </Link>
          <p className=" text-gray-300 text-2xl font-bold text-center" >Change password</p>
        <form method="post" onSubmit={login} action={getPassword} className=" px-6 max-sm:px-8 flex flex-col pt-3 ">
        <input type="password" name="password" id="password" placeholder="password" className=" p-2 ps-3 border-primary w-full h-9 font-medium caret-secondary text-lg placeholder:text-gray-300 bg-white dark:bg-gray-500 rounded-2xl text-gray-400 mb-3" />
          <input type="password" name="confirmPassword" id="confirm_password" placeholder="confirm password" className=" p-2 ps-3 border-primary w-full h-9 font-medium caret-secondary text-lg placeholder:text-gray-300 bg-white dark:bg-gray-500 rounded-2xl text-gray-400 mb-3" onChange={confirmPassword} />
          <button type="submit" className=" my-2 bg-primary dark:bg-secondary w-full h-9 font-bold rounded-2xl text-white" >Login</button>
        </form>
        <div className="alt text-gray-500 text-sm flex items-center justify-center m-auto " >
            <p>Have an account?&nbsp;</p>
            <Link href="/signin" className=" text-primary" >
              Signin
            </Link>
          </div>
          <div className="alt text-gray-500 text-sm flex items-center justify-center m-auto " >
            <p>Do not have an account?&nbsp;</p>
            <Link href="/signup" className=" text-primary" >
              Signup
            </Link>
          </div>
          
        </div>
      </main >
    );
  }
  