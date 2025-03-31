"use client";
import Product from "@/components/Card/Product";
import Link from "next/link";
import Image from "next/image";
import Rate from "@/components/Rate/Rate";
import Images from "@/_util/constants/images";
import { Trash, PenLine, User, Mail } from "lucide-react";
import Table from "@/components/Table/Table";
export default function Stock() {
  let formatter = new Intl.NumberFormat("en-ng", {
    style: "currency",
    currency: "NGN",
  });
  let rates = (Math.random()*5).toFixed(1);
  return (
    <div
      className="w-full flex flex-col gap-2 h-full scroll-none"
    >
        <ul className="w-full flex flex-col gap-2 h-full scroll-none">
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
        </ul>
        <Table/>
    </div>
  );
}
