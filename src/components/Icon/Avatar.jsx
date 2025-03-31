'use client'
import Image from "next/image";
import Images from "@/_util/constants/images";
import { User, ChevronDown} from "lucide-react";
import Link from "next/link";
import { useGlobalContext } from "@/_util/constants/context";

export default function Avatar() {
  var { isLogged } = useGlobalContext();

  return (
    <div>
      {isLogged ? (
        <div className="w-auto flex cursor-pointer items-center gap-1">
          <Image
            src={Images.avatar}
            alt="avatar_icon"
            className=" w-6 h-6 max-sm:w-8 max-sm:h-8 rounded-full"
            priority
          ></Image>
          <ChevronDown
                size={20}
                strokeWidth={1}
              />
        </div>
      ) : (
        <Link className=" flex items-center w-auto h-auto" href="/signin">
          <div className="w-auto text-slate-400 h-auto flex items-center gap-1">
            <User className="text-2xl sm:text-2xl" />
            <p className=" max-sm:hidden text-sm font-semibold text-slate-400">
              Login
            </p>
            <ChevronDown
              size={20}
              strokeWidth={1}
            />
          </div>
        </Link>
      )}
    </div>
  );
}
