"use client";
import React from "react";
import Logo from "@/components/Icon/Logo";

export default function error({ error, reset }) {
  return (
    <div className=" w-full h-screen flex flex-col justify-center items-center">
      <div className="w-72 box-border h-auto bg-white rounded-3xl gap-2 justify-center flex flex-col p-4 items-center">
        <Logo />
        <code className=" bg-slate-200 inline flex-wrap gap-1 text-slate-600 rounded-2xl p-4 text-sm font-bold">
        <span className=" text-base text-green-800 ">Error</span>
        <b className=" text-red-600 px-1">{"->"}</b>{error.message}</code>
        <button
          className=" font-bold capitalize text-white w-full bg-primary dark:bg-secondary p-2 rounded-full"
          onClick={reset}
        >
          reload
        </button>
      </div>
    </div>
  );
}
