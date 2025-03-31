'use client'
import React from 'react'
import Logo from '../Icon/Logo'
import Link from "next/link"
import { usePathname } from "next/navigation";

export default function AuthHeader() {
  let pathname = usePathname()

  let logs = [
    { name: "Login", href: "/signin" },
    { name: "Register", href: "/signup" }
  ];
  return (
    <header className=" sticky top-0 left-0 w-full h-14 flex justify-between items-center bg-white px-6 py-2 ">
        <Logo/>
        <nav className=" flex items-center gap-2">
          {logs.map((log,index) => (
            <Link key={index} className={pathname === log.href ? "hidden" : " text-white bg-secondary rounded-2xl px-4 py-1 font-semibold text-base"} href={log.href}>{log.name}</Link>
          ))}
        </nav>
    </header>
  )
}
