import Link from "next/link";
import {
  ChevronDown,
  ChevronUp,
  Ellipsis
} from "lucide-react";
export const Balance = ({icon,title,amount,rate,url,stats}) => {
  return (
    <div className="w-1/2 p-2 h-28 bg-white rounded-xl shadow-md">
      <Link
        href="#"
      >
      <div className="flex justify-between items-center font-semibold text-dim capitalize">
        <div className="flex gap-2 items-center font-semibold text-dim">
          {icon}
          <p className="text-xs">{title}</p>
        </div>
        <Ellipsis strokeWidth={1} className="text-xs" />
      </div>
      <p className=" font-semibold text-xl text-dim py-1">
        {amount.bool ? amount.value : amount.value}
      </p>
      <div className="flex items-center text-sm font-semibold pb-1">
        {stats ? (
          <div className="flex gap-1 items-center">
            <ChevronUp strokeWidth={4} size={15} className="text-green-600" />
            <p className="text-green-600">12.4%</p>
          </div>
        ) : (
          <div className="flex gap-1 items-center">
            <ChevronDown strokeWidth={4} size={15} className="text-red-600" />
            <p className="text-red-600">12.4%</p>
          </div>
        )}
        <p className="text-dim">&nbsp;+{Math.floor(Math.random()*100)} today</p>
      </div>
      </Link>
    </div>
  );
};
