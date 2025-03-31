"use client";
import Avatar from "@/components/Icon/Avatar";
import { Menu, Bell } from "lucide-react";
import { useGlobalContext } from "@/_util/constants/context";
import { usePathname } from "next/navigation";

export default function Header() {
  var { isMenu, setIsMenu } = useGlobalContext();
  let handleClick = () => {
    setIsMenu(!isMenu)
  }
  let pathname = usePathname()   
  return (
    <header className="sticky top-0 py-2 w-full h-auto bg-gray-100 flex items-center justify-between bg-opacity-90 z-50">
      <div className="flex gap-2 items-center">
        <Menu strokeWidth={1.5} size={25} onClick={handleClick}/>
          <h2 className="font-medium text-dim text-xl capitalize">{pathname == "/" ? pathname = "dashboard" : pathname.slice(1,pathname.length)}</h2>
        </div>
        <div className="w-auto flex gap-3">
          <Bell strokeWidth={1.5} size={20} className="text-primary" />
          <Avatar />
        </div>
    </header> 
  );
}
