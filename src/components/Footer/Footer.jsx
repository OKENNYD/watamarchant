"use client";
import Download from "../Nav/Download";


export default function Footer() {
  return (
    <footer className=" dark:bg-slate-800 bg-white">
      <div className="w-full max-sm:flex-col-reverse gap-4 max-sm:gap-2 max-sm:justify-start h-auto text-white font-normal text-lg flex justify-center items-center py-2 px-16 max-sm:px-4 bg-slate-200">
        <ul className=" inline-flex text-xs flex-wrap text-slate-600 dark:text-slate-200 ">
          <li className=" text-nowrap">Terms and Conditions</li>
          <li className=" text-nowrap">Transaction Service Agreement</li>
          <li className=" text-nowrap">Privacy Policy</li>
          <li className=" text-nowrap">Sitemap</li>
          <li className=" text-nowrap">Terms of Us</li>
          <li className=" text-nowrap">&copy;2024 Titoja. All rights reserved</li>
        </ul>
        <Download />
      </div>
    </footer>
  );
}
