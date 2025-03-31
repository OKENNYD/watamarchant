import AuthHeader from "@/components/Header/AuthHeader";

export default function Layout({ children }) {
  return (
      <div className=" bg-gray-100 bar">
        <AuthHeader/>
        {children}
        <footer className="max-sm:p-2 bg-white w-full h-auto flex justify-center items-center">
          <div className="w-full max-sm:flex-col-reverse gap-4 max-sm:gap-2 max-sm:justify-start h-auto text-white font-normal text-lg flex justify-center items-center m-2 py-2 px-16 max-sm:px-4 ">
            <ul className=" inline-flex text-sm list-disc flex-wrap text-slate-600 dark:text-slate-200 ">
              <li className=" text-nowrap">Terms and Conditions</li>
              <li className=" text-nowrap">Transaction Service Agreement</li>
              <li className=" text-nowrap">Privacy Policy</li>
              <li className=" text-nowrap">Sitemap</li>
              <li className=" text-nowrap">Terms of Us </li>
              <li className=" text-nowrap">&copy;2024 Splash. All rights reserved</li>
            </ul>
          </div>
        </footer>
      </div>
  );
}
