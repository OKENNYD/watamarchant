"use client";
import Link from "next/link";
import Image from "next/image";
import Images from "@/_util/constants/images";
import menu from "@/_util/api/menu";
import { useGlobalContext } from "@/_util/constants/context";
import { usePathname } from "next/navigation";

export default function Aside() {
  var { isMenu, setIsMenu } = useGlobalContext();
  let handleClick = () => {
    setIsMenu(!isMenu)
  }
  let pathName = usePathname()
  return (
    <aside className={`w-1/4 p-2 bg-white h-screen duration-1000 sticky top-0 left-0 ${isMenu ? "max-md:w-3/4 max-md:absolute " :"max-md:w-0 max-md:hidden"}`}>
      <Image
        alt="marchant"    
        src="/assets/img/light.png"
        width={200}
        height={50}  
        className="px-auto pt-4 "
      />
      <ul className="p-2 flex flex-col gap-1">
        {menu.map((_, i) => (
          <Link onClick={handleClick} key={i} href={_.url}>
            <li
              className={`w-full p-2 px-3 flex ${
                pathName === _.url
                  ? "bg-primary text-white hover:bg-primary"
                  : "hover:bg-slate-200"
              } items-center cursor-pointer gap-1 font-normal hover:px-2 text-lg text-slate-600 rounded-lg`}
            >
              {_.icon}
              {_.title}
            </li>
          </Link>
        ))}
      </ul>
      <div className="py-2 flex gap-1 items-center">
        <Image
          src={Images.shop}
          alt="product img"
          className="w-12 h-auto"
          priority
        />
        <p className="font-bold text-xl text-slate-800">Seller&rsquo;s Logo</p>
      </div>
    </aside>
  );
}
